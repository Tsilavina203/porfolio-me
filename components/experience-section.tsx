"use client"

import { useState } from "react"
import { ExternalLink, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useSectionNumber } from "@/hooks/use-section-number"

export function ExperienceSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const { t } = useLanguage()
  const { sectionRef, isVisible, NumberOverlay } = useSectionNumber(4)

  const experiences = [
    {
      role: "Data Engineer IA / Backend Developer",
      company: "Quark Development",
      period: "Février 2025 – Actuel",
      location: "Full Remote",
      link: "https://oia.quark-developpement.com/",
      description:
        "Implémentation de pipelines ETL et développement d'agents IA autonomes pour l'automatisation des workflows.",
      achievements: [
        "Implémentation de pipelines ETL pour ingestion, nettoyage et normalisation",
        "Développement d'agents IA autonomes pour emails et contenus personnalisés",
        "Automatisation des workflows IA pour réseaux sociaux",
        "Intégration de bases relationnelles et vectorielles",
        "Développement d'APIs FastAPI sécurisées avec CI/CD",
      ],
      stats: {
        projects: "3+",
        impact: "75%",
        efficiency: "80%",
      },
    },
    {
      role: "Data Engineer IA",
      company: "Swiftask Technology",
      period: "Mars 2024 – Janvier 2025",
      location: "Full Remote",
      link: "https://www.swiftask.ai/fr-fr",
      description:
        "Conception et automatisation de pipelines ETL/ELT complexes intégrant des LLMs multimodaux et développement d'agents IA.",
      achievements: [
        "Conception et automatisation de pipelines ETL/ELT pour données structurées et non structurées",
        "Intégration de LLMs multimodaux (texte, image, audio, vidéo)",
        "Développement d'agents RAG pour données juridiques (QA en français)",
        "Déploiement d'APIs FastAPI sécurisées et dockerisées",
      ],
      stats: {
        projects: "4+",
        impact: "80%",
        efficiency: "85%",
      },
    },
    {
      role: "Fullstack Developer / Data Scientist",
      company: "AKATA GOAVANA",
      period: "Juin 2023 – Mars 2024",
      location: "Fianarantsoa",
      link: "https://www.akata-goavana.com/fr",
      description: "Fine-tuning de modèles ML et automatisation des tests fonctionnels via IA générative.",
      achievements: [
        "Fine-tuning et évaluation de modèles ML",
        "Automatisation des tests fonctionnels via IA générative",
        "Pipelines ETL pour données marketing",
        "Développement de services IA pour analyse prédictive",
      ],
      stats: {
        projects: "2+",
        impact: "60%",
        efficiency: "70%",
      },
    },
  ]

  const experienceSections = [
    {
      title: "La Révélation",
      subtitle: "L'audace en héritage",
      description: "Premiers pas dans l'élite technologique",
      year: "2023",
      experience: experiences[2],
    },
    {
      title: "L'Ascension",
      subtitle: "L'appel du grand jeu",
      description: "Premières traces dans l'élite",
      year: "2024",
      experience: experiences[1],
    },
    {
      title: "La Transformation",
      subtitle: "Le rêve de l'excellence",
      description: "Sous la lumière de l'innovation",
      year: "2025",
      experience: experiences[0],
    },
  ]

  return (
    <>
      <NumberOverlay />
      <section 
        ref={sectionRef}
        id="experience" 
        className={`min-h-screen py-20 sm:py-32 px-4 sm:px-6 relative transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
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

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 px-4 sm:px-6 md:pl-12 lg:pl-20">
        
        {/* Main section title */}
        <div className="scroll-trigger relative">
          <div className="section-number text-foreground">
            4
          </div>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight relative z-10">
            <span className="block gradient-animated stagger-reveal" style={{ animationDelay: '0.1s' }}>{t.experience.title}</span>
            <span className="block text-muted-foreground/60 text-xl xs:text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:mt-4 font-light stagger-reveal" style={{ animationDelay: '0.3s' }}> {t.experience.subtitle}</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/70 max-w-2xl mt-4 sm:mt-6 md:mt-8 leading-relaxed font-light scroll-trigger">
            {t.experience.description}
          </p>
        </div>

        {/* Experience sections */}
        {experienceSections.map((section, sectionIdx) => (
          <div key={sectionIdx} className="scroll-trigger space-y-12 sm:space-y-16">
            
            {/* Section header */}
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

            {/* Experience content */}
            <div className="grid md:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-start">
              
              {/* Left: Narrative */}
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light">
                    {section.experience.description}
                  </p>
                </div>

                {/* Stats */}
                {section.experience.stats && (
                  <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 border-t border-border/20">
                    <div className="text-center space-y-0.5 xs:space-y-1">
                      <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light large-number text-foreground count-up">
                        {section.experience.stats.projects}
                      </div>
                      <p className="text-[10px] xs:text-xs text-muted-foreground/60 font-light tracking-wider uppercase px-0.5">
                        Projets
                      </p>
                    </div>
                    <div className="text-center space-y-0.5 xs:space-y-1">
                      <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light large-number text-primary count-up" style={{ animationDelay: '0.2s' }}>
                        {section.experience.stats.impact}
                      </div>
                      <p className="text-[10px] xs:text-xs text-muted-foreground/60 font-light tracking-wider uppercase px-0.5">
                        Impact
                      </p>
                    </div>
                    <div className="text-center space-y-0.5 xs:space-y-1">
                      <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-light large-number text-accent count-up" style={{ animationDelay: '0.4s' }}>
                        {section.experience.stats.efficiency}
                      </div>
                      <p className="text-[10px] xs:text-xs text-muted-foreground/60 font-light tracking-wider uppercase px-0.5">
                        Efficacité
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Details card */}
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

            {/* Section divider */}
            {sectionIdx < experienceSections.length - 1 && (
              <div className="section-divider"></div>
            )}
          </div>
        ))}
      </div>

      {/* Project modal */}
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
