"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { useSectionNumber } from "@/hooks/use-section-number"
import { getSkillCategories } from "@/lib/content/skills"
import { profile } from "@/lib/content/profile"

export function SkillsSection() {
  const { t, language } = useLanguage()
  const lang = language as "en" | "fr"
  const skillCategories = getSkillCategories(lang)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const { sectionRef, isVisible, TransitionOverlay, SectionMarker } = useSectionNumber("skills")

  const getColorClasses = (color: string) => {
    if (color === "primary") {
      return {
        border: "border-primary/30 hover:border-primary/60",
        bg: "bg-primary/10",
        text: "text-primary",
        icon: "text-primary",
      }
    }
    return {
      border: "border-accent/30 hover:border-accent/60",
      bg: "bg-accent/10",
      text: "text-accent",
      icon: "text-accent",
    }
  }

  return (
    <>
      <TransitionOverlay />
      <section
        ref={sectionRef}
        id="skills"
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

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 px-4 sm:px-6 md:pl-12 lg:pl-20">
        <SectionMarker />

        <div className="scroll-trigger relative z-10">
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
            <span className="block gradient-animated stagger-reveal" style={{ animationDelay: '0.1s' }}>{t.skills.title}</span>
            <span className="block text-muted-foreground/60 text-xl xs:text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:mt-4 font-light stagger-reveal" style={{ animationDelay: '0.3s' }}>
               {t.skills.subtitle}
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/70 max-w-2xl mt-4 sm:mt-6 md:mt-8 leading-relaxed font-light scroll-trigger">
            {t.skills.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 scroll-trigger">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const colors = getColorClasses(category.color)
            const isHovered = hoveredCategory === category.id

            return (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`
                  group relative p-3 sm:p-4 md:p-4 glass border ${colors.border}
                  transition-all duration-500 overflow-hidden
                  ${isHovered ? 'scale-[1.05] shadow-xl border-opacity-100' : ''}
                  hover:border-opacity-80
                `}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  clipPath: isHovered ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
              >
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  bg-gradient-to-br ${colors.bg} from-transparent via-transparent to-transparent
                `}></div>

                <div className={`
                  absolute top-0 left-0 w-full h-0.5 ${colors.bg}
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500
                `}></div>

                <div className="relative z-10 space-y-1.5 sm:space-y-2 md:space-y-2.5">
                  <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                    <div className={`
                      p-0.5 xs:p-1 sm:p-1.5 rounded ${colors.bg} border ${colors.border}
                      transition-all duration-300 group-hover:rotate-12 group-hover:scale-110
                    `}>
                      <Icon className={`w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 ${colors.icon}`} />
                    </div>
                    <h3 className={`text-[10px] xs:text-xs sm:text-sm md:text-base font-light ${colors.text} leading-tight truncate`}>
                      {category.category.split(' ')[0]}
                      {category.category.includes('&') && (
                        <span className="block text-[9px] xs:text-[10px] sm:text-xs opacity-70">{category.category.split('&')[1]?.trim()}</span>
                      )}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-0.5 xs:pt-1">
                    {category.skills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className="chat-suggestion-chip text-xs px-2.5 py-1 rounded-full border transition-colors truncate max-w-full"
                        title={skill}
                      >
                        {skill}
                      </span>
                    ))}
                    {category.skills.length > 6 && (
                      <span className="chat-suggestion-chip text-xs px-2.5 py-1 rounded-full border transition-colors">
                        +{category.skills.length - 6}
                      </span>
                    )}
                  </div>
                </div>

                <div className={`
                  absolute bottom-0 right-0 w-12 h-12 ${colors.bg} rounded-tl-full
                  opacity-0 group-hover:opacity-10 transition-opacity duration-500
                  blur-2xl
                `}></div>

                <div className={`
                  absolute top-1.5 right-1.5 w-4 h-4 rounded-full ${colors.bg} border ${colors.border}
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  flex items-center justify-center
                `}>
                  <span className={`text-[7px] ${colors.text} font-bold`}>
                    {category.skills.length}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="scroll-trigger grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border/20">
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light large-number text-foreground count-up">
              80+
            </div>
            <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase px-1">
              {t.skills.stats.skills}
            </p>
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light large-number text-primary count-up" style={{ animationDelay: '0.1s' }}>
              {profile.yearsExperience}
            </div>
            <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase px-1">
              {t.skills.stats.years}
            </p>
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light large-number text-accent count-up" style={{ animationDelay: '0.2s' }}>
              {profile.projectsCount}
            </div>
            <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase px-1">
              {t.skills.stats.projects}
            </p>
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light large-number text-foreground count-up" style={{ animationDelay: '0.3s' }}>
              {profile.technologiesCount}
            </div>
            <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase px-1">
              {t.skills.stats.tech}
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
