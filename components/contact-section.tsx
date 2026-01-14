"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
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
              }, index * 150)
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

  return (
    <section 
      ref={sectionRef}
      id="contact" 
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
          5
        </div>

        <div className="scroll-trigger relative z-10 text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
            <span className="block gradient-animated stagger-reveal" style={{ animationDelay: '0.1s' }}>Contact</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/70 max-w-2xl mx-auto mt-6 sm:mt-8 leading-relaxed font-light scroll-trigger">
            {t.contact.description}
          </p>
        </div>

        <div className="scroll-trigger flex justify-center">
          <a
            href="https://www.linkedin.com/in/tsilavo-andriatafitasoa-5484742a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-transparent border-2 border-foreground/20 text-foreground rounded-none font-light tracking-wider hover:border-primary hover:text-primary transition-all duration-500 text-sm sm:text-base uppercase relative overflow-hidden"
          >
            <span className="relative z-10">{t.contact.getInTouch}</span>
            <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 scroll-trigger">
          <div className="space-y-2 p-4 sm:p-6 glass border border-border/30 hover:border-primary/50 transition-all duration-500 card-hover">
            <div className="text-xs sm:text-sm text-accent font-light tracking-wider uppercase mb-2">{t.contact.email}</div>
            <a
              href="mailto:andriatafitasoa203@gmail.com"
              className="text-sm sm:text-base text-foreground hover:text-primary transition-colors break-all font-light"
            >
              andriatafitasoa203@gmail.com
            </a>
          </div>
          <div className="space-y-2 p-4 sm:p-6 glass border border-border/30 hover:border-accent/50 transition-all duration-500 card-hover">
            <div className="text-xs sm:text-sm text-accent font-light tracking-wider uppercase mb-2">{t.contact.phone}</div>
            <a
              href="tel:+261386822498"
              className="text-sm sm:text-base text-foreground hover:text-primary transition-colors font-light"
            >
              +261 38 68 224 98
            </a>
          </div>
          <div className="space-y-2 p-4 sm:p-6 glass border border-border/30 hover:border-primary/50 transition-all duration-500 card-hover">
            <div className="text-xs sm:text-sm text-accent font-light tracking-wider uppercase mb-2">{t.contact.location}</div>
            <p className="text-sm sm:text-base text-foreground font-light">Madagascar</p>
          </div>
        </div>
      </div>
    </section>
  )
}
