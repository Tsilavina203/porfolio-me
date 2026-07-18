"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useSectionNumber } from "@/hooks/use-section-number"
import { projects as projectsData } from "@/lib/content/projects"

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t, language } = useLanguage()
  const lang = language as "fr" | "en"
  const { sectionRef, isVisible, TransitionOverlay, SectionMarker } = useSectionNumber("projects")

  const projects = projectsData
    .filter((p) => p.featured)
    .map((p) => ({
      title: p.title,
      description: p.description[lang],
      problem: p.problem[lang],
      solution: p.solution[lang],
      impact: p.impact[lang],
      stack: p.stack,
      link: p.link,
    }))

  const projectsPerSlide = 2
  const totalSlides = Math.ceil(projects.length / projectsPerSlide)
  const hasMultipleSlides = totalSlides > 1
  const canGoNext = currentIndex < totalSlides - 1
  const canGoPrevious = currentIndex > 0

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const getVisibleProjects = () => {
    const start = currentIndex * projectsPerSlide
    return projects.slice(start, start + projectsPerSlide)
  }

  return (
    <>
      <TransitionOverlay />
      <section
        ref={sectionRef}
        id="projects"
        className={`min-h-screen py-20 sm:py-32 px-4 sm:px-6 relative flex items-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background z-0"></div>

      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 px-4 sm:px-6 md:pl-12 lg:pl-20">
        <SectionMarker />

        <div className="scroll-trigger relative z-10">
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
            <span className="block gradient-animated stagger-reveal" style={{ animationDelay: '0.1s' }}>{t.projects.title}</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/70 max-w-2xl mt-4 sm:mt-6 md:mt-8 leading-relaxed font-light scroll-trigger">
             {t.projects.description}
          </p>
        </div>

        <div className="relative">
          {hasMultipleSlides && canGoPrevious && (
            <div className="carousel-scroll-fade carousel-scroll-fade--left hidden sm:block" aria-hidden />
          )}
          {hasMultipleSlides && canGoNext && (
            <div className="carousel-scroll-fade carousel-scroll-fade--right hidden sm:block" aria-hidden />
          )}

          {hasMultipleSlides && (
            <button
              onClick={goToPrevious}
              className={`carousel-nav-btn absolute left-0 sm:left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 glass border border-border/50 rounded-full p-2 xs:p-2.5 sm:p-3 hover:border-primary/50 transition-all duration-300 shadow-lg -translate-x-1/2 sm:-translate-x-2 md:-translate-x-4 lg:-translate-x-8 hover-lift hover-glow ${
                canGoPrevious ? "carousel-nav-btn--hint carousel-nav-btn--prev-hint" : ""
              }`}
              aria-label={t.projects.previousProjects}
            >
              <ChevronLeft className="carousel-nav-icon w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary" />
            </button>
          )}
          {hasMultipleSlides && (
            <button
              onClick={goToNext}
              className={`carousel-nav-btn absolute right-0 sm:right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 glass border border-border/50 rounded-full p-2 xs:p-2.5 sm:p-3 hover:border-primary/50 transition-all duration-300 shadow-lg translate-x-1/2 sm:translate-x-2 md:translate-x-4 lg:translate-x-8 hover-lift hover-glow ${
                canGoNext ? "carousel-nav-btn--hint carousel-nav-btn--next-hint" : ""
              }`}
              aria-label={t.projects.nextProjects}
            >
              <ChevronRight className="carousel-nav-icon w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary" />
            </button>
          )}

          <div
            key={currentIndex}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 carousel-slide-enter"
          >
            {getVisibleProjects().map((project, idx) => (
              <div
                key={currentIndex * projectsPerSlide + idx}
                className="p-3 xs:p-4 sm:p-6 md:p-8 glass rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-500 card-hover group"
              >
                <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 md:gap-6 mb-3 xs:mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl font-bold mb-1.5 xs:mb-2 text-primary leading-tight">{project.title}</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground mb-2 xs:mb-3 leading-relaxed">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 xs:gap-2 text-[10px] xs:text-xs sm:text-sm text-primary hover:text-accent transition-colors font-medium"
                      >
                        <ExternalLink className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
                        {t.projects.visitProject}
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-2 xs:space-y-3 sm:space-y-4 mb-3 xs:mb-4 sm:mb-6">
                  <div>
                    <h4 className="text-[10px] xs:text-xs sm:text-sm font-semibold text-primary mb-1 xs:mb-1.5 sm:mb-2">{t.projects.problem}</h4>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] xs:text-xs sm:text-sm font-semibold text-primary mb-1 xs:mb-1.5 sm:mb-2">{t.projects.solution}</h4>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] xs:text-xs sm:text-sm font-semibold text-accent mb-1 xs:mb-1.5 sm:mb-2">{t.projects.impact}</h4>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 pt-2 xs:pt-3 sm:pt-4 border-t border-border/30">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-primary/20 text-primary text-[9px] xs:text-[10px] sm:text-xs rounded-full font-mono font-medium border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {hasMultipleSlides && (
            <div className="flex flex-col items-center gap-3 mt-8">
              <p className="text-xs sm:text-sm text-primary/80 font-medium animate-pulse">
                {t.projects.scrollHint}
              </p>
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-primary w-8 shadow-[0_0_12px_oklch(0.65_0.2_250/0.5)]"
                        : "w-2 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  )
}
