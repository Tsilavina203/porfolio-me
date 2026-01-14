"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Animate numbers on mount
    const animateNumbers = () => {
      const numbers = document.querySelectorAll('.number-display')
      numbers.forEach((num, index) => {
        setTimeout(() => {
          num.classList.add('count-up')
        }, 1000 + index * 200)
      })
    }
    
    setTimeout(animateNumbers, 500)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-32 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={`max-w-7xl w-full relative z-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Main content */}
        <div className="text-center space-y-8 sm:space-y-12 md:space-y-16">
          
          {/* Tagline - small text at top */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm sm:text-base text-muted-foreground/60 font-light tracking-[0.2em] uppercase">
              {t.hero.tagline}
            </p>
          </div>

          {/* Large split title - inspired by "Né Pour Briller" */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.9] tracking-tight">
              <div className="split-text overflow-hidden">
                <span style={{ animationDelay: '0.4s' }} className="block text-foreground stagger-reveal">
                  {t.hero.titleLine1 || "Né Pour"}
                </span>
              </div>
              <div className="split-text overflow-hidden">
                <span style={{ animationDelay: '0.6s' }} className="block text-foreground mt-2 sm:mt-4 stagger-reveal">
                  {t.hero.titleLine2 || "Briller"}
                </span>
              </div>
              <div className="split-text overflow-hidden">
                <span style={{ animationDelay: '0.8s' }} className="block gradient-animated mt-2 sm:mt-4 stagger-reveal">
                  {t.hero.titleLine3 || "dans l'IA"}
                </span>
              </div>
            </h1>
          </div>

          {/* Narrative description */}
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light">
              {t.hero.description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-transparent border-2 border-foreground/20 text-foreground rounded-none font-light tracking-wider hover:border-primary hover:text-primary transition-all duration-500 text-sm sm:text-base uppercase relative overflow-hidden"
            >
              <span className="relative z-10">{t.hero.viewProjects}</span>
              <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </div>

          {/* Stats - Large numbers display */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 pt-12 sm:pt-16 md:pt-20 border-t border-border/30 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <div className="text-center space-y-2">
              <div className="number-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light large-number text-foreground opacity-0">
                3
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase">
                {t.hero.yearsExperience}
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="number-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light large-number text-foreground opacity-0">
                10+
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase">
                {t.hero.projectsDelivered}
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="number-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light large-number text-foreground opacity-0">
                30+
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase">
                {t.hero.technologies}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/30 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
