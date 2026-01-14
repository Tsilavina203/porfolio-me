"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const revealElements = entry.target.querySelectorAll('.scroll-trigger')
            revealElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible')
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  const projects = [
    {
      title: "Swiftask Technology",
      description: "AI-powered task automation platform for enterprise workflow optimization.",
      problem: "Manual task management consuming significant time and resources.",
      solution: "Built comprehensive AI automation system with intelligent task routing and execution.",
      impact: "Streamlined workflows, enhanced productivity across teams",
      stack: ["LLMs", "FastAPI", "Python", "React", "Database Design"],
      link: "https://www.swiftask.ai/fr-fr",
    },
    {
      title: "Quark Development - OIA Project",
      description: "Intelligent automation platform integrating AI capabilities for business process optimization.",
      problem: "Complex business processes requiring manual intervention and coordination.",
      solution: "Developed OIA (Open Intelligence Architecture) with AI agents and workflow automation.",
      impact: "Reduced manual processes by 75%, improved efficiency",
      stack: ["LangGraph", "LLMs", "FastAPI", "React", "Automation"],
      link: "https://oia.quark-developpement.com/",
    },
    {
      title: "Akata Goavana",
      description: "Web platform for logistics and supply chain management with real-time tracking.",
      problem: "Lack of visibility in supply chain operations and manual coordination.",
      solution: "Built full-stack platform with real-time tracking, analytics, and automation.",
      impact: "Improved supply chain visibility, reduced operational costs",
      stack: ["React", "FastAPI", "Python", "PostgreSQL", "Real-time Systems"],
      link: "https://www.akata-goavana.com/fr",
    },
    {
      title: "RAG System for Legal Documents",
      description:
        "Developed a Retrieval Augmented Generation system for processing and analyzing legal documents with French language support.",
      problem: "Manual document review taking significant time. Limited language support for French content.",
      solution:
        "Implemented RAG pipeline with LangChain, vector databases (Qdrant), and LLM integration for French language QA.",
      impact: "Reduced document review time, improved accuracy for multilingual content",
      stack: ["LangChain", "LLMs", "Qdrant", "FastAPI", "Python"],
    },
    {
      title: "Multimodal LLM Agent",
      description: "Built an autonomous AI agent integrating text, image, audio, and video processing capabilities.",
      problem: "Need for intelligent automation across multiple data types. Complex manual workflows.",
      solution: "Developed multimodal agent using advanced LLMs with LangGraph for orchestration and state management.",
      impact: "Automated complex workflows, reduced manual intervention by 80%",
      stack: ["LLMs", "LangGraph", "Computer Vision", "Audio Processing", "FastAPI"],
    },
    {
      title: "ETL Pipeline for Data Integration",
      description:
        "Designed and implemented scalable ETL pipeline for ingesting, cleaning, and normalizing structured and unstructured data.",
      problem: "Data quality issues, slow processing, inconsistent formats.",
      solution:
        "Built automated ETL with data validation, error handling, and monitoring using Python and data engineering best practices.",
      impact: "Improved data quality by 95%, reduced processing time by 70%",
      stack: ["Python", "Pandas", "Data Cleaning", "Qdrant", "Docker"],
    },
  ]

  const projectsPerSlide = 2
  const totalSlides = Math.ceil(projects.length / projectsPerSlide)

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
    <section 
      ref={sectionRef}
      id="projects" 
      className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 relative flex items-center"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background z-0"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16 sm:space-y-20 md:space-y-24 pl-12 md:pl-20">
        {/* Section number */}
        <div className="section-number text-foreground">
          3
        </div>

        {/* Section title - Large and split */}
        <div className="scroll-trigger relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
            <span className="block gradient-animated stagger-reveal" style={{ animationDelay: '0.1s' }}>Projets</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/70 max-w-2xl mt-6 sm:mt-8 leading-relaxed font-light scroll-trigger">
            {t.projects.description}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 glass border border-border/50 rounded-full p-1.5 sm:p-2 hover:border-primary/50 transition-all duration-300 shadow-lg -translate-x-2 sm:-translate-x-4 md:-translate-x-8 hover-lift hover-glow"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 glass border border-border/50 rounded-full p-1.5 sm:p-2 hover:border-primary/50 transition-all duration-300 shadow-lg translate-x-2 sm:translate-x-4 md:translate-x-8 hover-lift hover-glow"
            aria-label="Next projects"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {getVisibleProjects().map((project, idx) => (
              <div
                key={currentIndex * projectsPerSlide + idx}
                className="p-4 sm:p-6 md:p-8 glass rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-500 card-hover group"
              >
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 text-primary leading-tight">{project.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary hover:text-accent transition-colors font-medium"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        {t.projects.visitProject}
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">{t.projects.problem}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">{t.projects.solution}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-accent mb-1.5 sm:mb-2">{t.projects.impact}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-border/30">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-primary/20 text-primary text-[10px] xs:text-xs rounded-full font-mono font-medium border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
