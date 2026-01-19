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
      {/* Deep background layer - 200m depth effect */}
      <div className="absolute inset-0 -z-20" style={{ 
        perspective: '2000px',
        transformStyle: 'preserve-3d'
      }}>
        {/* Sun core - deep in background (200m depth) */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: 'clamp(400px, 80vw, 800px)',
            height: 'clamp(400px, 80vw, 800px)',
            transform: 'translateZ(-200px) translateY(40%)',
            opacity: 0.5
          }}
        >
          {/* Sun glow layers for depth */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 200, 100, 0.35) 0%, rgba(255, 150, 50, 0.25) 30%, rgba(255, 100, 0, 0.15) 50%, transparent 70%)',
              filter: 'blur(60px)',
              animation: 'sunPulse 8s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 220, 120, 0.25) 0%, rgba(255, 180, 80, 0.2) 40%, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'sunPulse 10s ease-in-out infinite 1s'
            }}
          />
          {/* Main sun disc */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 230, 150, 0.4) 0%, rgba(255, 200, 100, 0.3) 40%, rgba(255, 150, 50, 0.15) 60%, transparent 80%)',
              filter: 'blur(40px)',
              animation: 'sunRise 12s ease-out infinite'
            }}
          />
        </div>

        {/* Sun rays - extending outward with depth */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: 'clamp(600px, 120vw, 1200px)',
            height: 'clamp(600px, 120vw, 1200px)',
            transform: 'translateZ(-150px) translateY(35%)',
            opacity: 0.25
          }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                transform: `rotate(${i * 30}deg)`,
                transformOrigin: 'center bottom'
              }}
            >
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-full"
                style={{
                  background: 'linear-gradient(to top, rgba(255, 200, 100, 0.4) 0%, rgba(255, 150, 50, 0.2) 50%, transparent 100%)',
                  filter: 'blur(2px)',
                  animation: `rayPulse ${3 + i * 0.2}s ease-in-out infinite ${i * 0.1}s`
                }}
              />
            </div>
          ))}
        </div>

        {/* Atmospheric haze layers for depth perception (200m depth effect) */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/2"
          style={{
            background: 'linear-gradient(to top, rgba(255, 200, 100, 0.12) 0%, rgba(255, 150, 50, 0.06) 30%, transparent 70%)',
            transform: 'translateZ(-100px)',
            filter: 'blur(100px)',
            opacity: 0.35
          }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/3"
          style={{
            background: 'linear-gradient(to top, rgba(255, 180, 80, 0.15) 0%, transparent 60%)',
            transform: 'translateZ(-50px)',
            filter: 'blur(120px)',
            opacity: 0.25
          }}
        />
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/85 z-0"></div>
      
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

      <div className={`max-w-7xl w-full relative z-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Main content */}
        <div className="text-center space-y-8 sm:space-y-12 md:space-y-16 relative">
          
          {/* Tagline - small text at top */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm sm:text-base text-muted-foreground/60 font-light tracking-[0.2em] uppercase">
              {t.hero.tagline}
            </p>
          </div>

          {/* Large split title - inspired by "Né Pour Briller" */}
          <div className="space-y-1 sm:space-y-2 md:space-y-4">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight">
              <div className="split-text overflow-hidden">
                <span style={{ animationDelay: '0.4s' }} className="block text-foreground stagger-reveal">
                  {t.hero.titleLine1 || "Né Pour"}
                </span>
              </div>
              <div className="split-text overflow-hidden">
                <span style={{ animationDelay: '0.6s' }} className="block text-foreground mt-1 sm:mt-2 md:mt-4 stagger-reveal">
                  {t.hero.titleLine2 || "Briller"}
                </span>
              </div>
              <div className="split-text overflow-hidden">
                <span style={{ animationDelay: '0.8s' }} className="block gradient-animated mt-1 sm:mt-2 md:mt-4 stagger-reveal">
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
          <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-6 md:gap-8 lg:gap-12 pt-8 sm:pt-12 md:pt-16 lg:pt-20 border-t border-border/40 max-w-4xl mx-auto animate-fade-in relative z-20" style={{ animationDelay: '1.4s' }}>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="number-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light large-number text-foreground opacity-0 drop-shadow-lg">
                3
              </div>
              <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/80 font-light tracking-wider uppercase px-1">
                {t.hero.yearsExperience}
              </p>
            </div>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="number-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light large-number text-foreground opacity-0 drop-shadow-lg">
                10+
              </div>
              <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/80 font-light tracking-wider uppercase px-1">
                {t.hero.projectsDelivered}
              </p>
            </div>
            <div className="text-center space-y-1 sm:space-y-2">
              <div className="number-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light large-number text-foreground opacity-0 drop-shadow-lg">
                30+
              </div>
              <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/80 font-light tracking-wider uppercase px-1">
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
