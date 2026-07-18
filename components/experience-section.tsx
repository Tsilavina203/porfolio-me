"use client"

import { useState } from "react"
import { ExternalLink, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useSectionNumber } from "@/hooks/use-section-number"
import {
  experiences,
  earlierExperienceIndices,
  toDisplayExperience,
} from "@/lib/content/experience"

export function ExperienceSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const { t, language } = useLanguage()
  const lang = language as "fr" | "en"
  const { sectionRef, isVisible, TransitionOverlay, SectionMarker } = useSectionNumber("experience")

  const experienceSections = [
    {
      ...t.experience.section1,
      year: "2023",
      experience: toDisplayExperience(experiences[2], lang),
    },
    {
      ...t.experience.section2,
      year: "2024",
      experience: toDisplayExperience(experiences[1], lang),
    },
    {
      ...t.experience.section3,
      year: "2025",
      experience: toDisplayExperience(experiences[0], lang),
    },
  ]

  const earlierExperiences = earlierExperienceIndices.map((i) => toDisplayExperience(experiences[i], lang))

  return (
    <>
      <TransitionOverlay />
      <section
        ref={sectionRef}
        id="experience"
        className={`min-h-screen py-20 sm:py-32 px-4 sm:px-6 relative transition-opacity duration-1000 ${
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

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 px-4 sm:px-6 md:pl-12 lg:pl-20">

        <div className="scroll-trigger relative">
          <SectionMarker />
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight relative z-10">
            <span className="block gradient-animated stagger-reveal" style={{ animationDelay: '0.1s' }}>{t.experience.title}</span>
            <span className="block text-muted-foreground/60 text-xl xs:text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:mt-4 font-light stagger-reveal" style={{ animationDelay: '0.3s' }}> {t.experience.subtitle}</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/70 max-w-2xl mt-4 sm:mt-6 md:mt-8 leading-relaxed font-light scroll-trigger">
            {t.experience.description}
          </p>
        </div>

        {experienceSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="scroll-trigger space-y-12 sm:space-y-16">

            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col xs:flex-row items-start xs:items-baseline gap-2 xs:gap-4 sm:gap-6">
                <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light text-muted-foreground/40 large-number">
                  {section.year}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                    <span className="block text-foreground">{section.title}</span>
                    <span className="block gradient-animated mt-1 sm:mt-2">{section.subtitle}</span>
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-muted-foreground/60 mt-1.5 xs:mt-2 sm:mt-3 font-light tracking-wider uppercase">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-start">

              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light">
                    {section.experience.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 sm:pt-6 border-t border-border/20">
                  {section.experience.stack.slice(0, 8).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] xs:text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {section.experience.stack.length > 8 && (
                    <span className="px-2 py-0.5 text-[10px] text-muted-foreground">
                      +{section.experience.stack.length - 8}
                    </span>
                  )}
                </div>
              </div>

              <div className="glass border border-border/30 rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-500 card-hover">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-lg xs:text-xl sm:text-2xl font-light text-primary leading-tight">
                      {section.experience.role}
                    </h4>
                    <div className="flex flex-col gap-1.5 xs:gap-2 text-xs xs:text-sm">
                      <div className="flex items-center gap-1.5 xs:gap-2 text-accent font-medium">
                        <span>{section.experience.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 xs:gap-2 text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5 xs:w-4 xs:h-4 flex-shrink-0" />
                        <span>{section.experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 xs:gap-2 text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 xs:w-4 xs:h-4 flex-shrink-0" />
                        <span>{section.experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-border/20">
                    <h5 className="text-xs xs:text-sm font-medium text-primary mb-2 xs:mb-3">{t.experience.keyAchievements}</h5>
                    <ul className="space-y-1.5 xs:space-y-2">
                      {section.experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-1.5 xs:gap-2 text-xs xs:text-sm text-muted-foreground/80">
                          <span className="text-accent font-bold flex-shrink-0 mt-0.5">▸</span>
                          <span className="leading-relaxed font-light">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {section.experience.link && (
                    <div className="pt-3 sm:pt-4">
                      <button
                        onClick={() => setSelectedProject(section.experience.link)}
                        className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-transparent border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 rounded-none font-light tracking-wider transition-all duration-300 text-xs xs:text-sm uppercase"
                      >
                        <ExternalLink className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                        {t.experience.viewProject}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {sectionIdx < experienceSections.length - 1 && (
              <div className="section-divider"></div>
            )}
          </div>
        ))}

        <div className="scroll-trigger space-y-4 pt-8 border-t border-border/20">
          <p className="text-xs font-light tracking-wider uppercase text-muted-foreground/60">
            {t.experience.earlierExperience}
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {earlierExperiences.map((exp) => (
              <div
                key={exp.company + exp.period}
                className="p-4 glass border border-border/30 hover:border-primary/40 transition-all"
              >
                <h4 className="text-sm font-light text-primary">{exp.role}</h4>
                <p className="text-xs text-foreground/90 mt-0.5">{exp.company}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{exp.period} · {exp.location}</p>
                <ul className="mt-2 space-y-1">
                  {exp.achievements.slice(0, 2).map((item, i) => (
                    <li key={i} className="text-[10px] xs:text-xs text-muted-foreground/80 flex gap-1">
                      <span className="text-accent shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {exp.link && (
                  <button
                    onClick={() => setSelectedProject(exp.link!)}
                    className="mt-2 text-[10px] text-primary hover:text-accent inline-flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {t.experience.viewProject}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="glass-strong border border-primary/50 rounded-lg p-6 sm:p-8 max-w-md w-full shadow-2xl animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl font-light mb-4">{t.experience.viewProjectModal}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 font-light">
              {t.experience.viewProjectDescription}
            </p>
            <a
              href={selectedProject}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-transparent border-2 border-primary text-primary font-light py-3 rounded-none hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base mb-3 tracking-wider uppercase"
            >
              {t.experience.openProject} →
            </a>
            <button
              onClick={() => setSelectedProject(null)}
              className="w-full bg-transparent border border-border text-muted-foreground font-light py-3 rounded-none hover:bg-muted/80 transition-colors text-sm sm:text-base tracking-wider uppercase"
            >
              {t.experience.close}
            </button>
          </div>
        </div>
      )}
    </section>
    </>
  )
}
