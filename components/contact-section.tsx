"use client"

import { useLanguage } from "@/contexts/language-context"
import { useSectionNumber } from "@/hooks/use-section-number"

export function ContactSection() {
  const { t } = useLanguage()
  const { sectionRef, isVisible, NumberOverlay } = useSectionNumber(5)

  return (
    <>
      <NumberOverlay />
      <section 
        ref={sectionRef}
        id="contact" 
        className={`min-h-screen py-20 sm:py-32 px-4 sm:px-6 relative flex items-center transition-opacity duration-1000 ${
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

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 px-4 sm:px-6 md:pl-12 lg:pl-20">
        {/* Section number */}
        <div className="section-number text-foreground">
          5
        </div>

        <div className="scroll-trigger relative z-10 text-center">
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
            <span className="block gradient-animated stagger-reveal" style={{ animationDelay: '0.1s' }}>Contact</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/70 max-w-2xl mx-auto mt-4 sm:mt-6 md:mt-8 leading-relaxed font-light scroll-trigger">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 scroll-trigger">
          <div className="space-y-1.5 xs:space-y-2 p-3 xs:p-4 sm:p-6 glass border border-border/30 hover:border-primary/50 transition-all duration-500 card-hover">
            <div className="text-[10px] xs:text-xs sm:text-sm text-accent font-light tracking-wider uppercase mb-1.5 xs:mb-2">{t.contact.email}</div>
            <a
              href="mailto:andriatafitasoa203@gmail.com"
              className="text-xs xs:text-sm sm:text-base text-foreground hover:text-primary transition-colors break-all font-light"
            >
              andriatafitasoa203@gmail.com
            </a>
          </div>
          <div className="space-y-1.5 xs:space-y-2 p-3 xs:p-4 sm:p-6 glass border border-border/30 hover:border-accent/50 transition-all duration-500 card-hover">
            <div className="text-[10px] xs:text-xs sm:text-sm text-accent font-light tracking-wider uppercase mb-1.5 xs:mb-2">{t.contact.phone}</div>
            <a
              href="tel:+261386822498"
              className="text-xs xs:text-sm sm:text-base text-foreground hover:text-primary transition-colors font-light"
            >
              +261 38 68 224 98
            </a>
          </div>
          <div className="space-y-1.5 xs:space-y-2 p-3 xs:p-4 sm:p-6 glass border border-border/30 hover:border-primary/50 transition-all duration-500 card-hover">
            <div className="text-[10px] xs:text-xs sm:text-sm text-accent font-light tracking-wider uppercase mb-1.5 xs:mb-2">{t.contact.location}</div>
            <p className="text-xs xs:text-sm sm:text-base text-foreground font-light">Madagascar</p>
          </div>
          <div className="space-y-1.5 xs:space-y-2 p-3 xs:p-4 sm:p-6 glass border border-border/30 hover:border-primary/50 transition-all duration-500 card-hover">
            <div className="text-[10px] xs:text-xs sm:text-sm text-accent font-light tracking-wider uppercase mb-1.5 xs:mb-2">{t.contact.nif}</div>
            <p className="text-xs xs:text-sm sm:text-base text-foreground font-light">7019388860</p>
          </div>
          <div className="space-y-1.5 xs:space-y-2 p-3 xs:p-4 sm:p-6 glass border border-border/30 hover:border-accent/50 transition-all duration-500 card-hover">
            <div className="text-[10px] xs:text-xs sm:text-sm text-accent font-light tracking-wider uppercase mb-1.5 xs:mb-2">{t.contact.stat}</div>
            <p className="text-xs xs:text-sm sm:text-base text-foreground font-light">74908 21 2025 0 01129</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
