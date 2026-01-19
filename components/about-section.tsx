"use client"

import { useLanguage } from "@/contexts/language-context"
import { useSectionNumber } from "@/hooks/use-section-number"

export function AboutSection() {
  const { t } = useLanguage()
  const { sectionRef, isVisible, NumberOverlay } = useSectionNumber(1)

  return (
    <>
      <NumberOverlay />
      <section 
        ref={sectionRef}
        id="about" 
        className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 relative flex items-center"
      >

      {/* Background overlay with subtle pattern */}
      <div className={`absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background z-0 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className={`max-w-6xl mx-auto w-full relative z-10 px-4 sm:px-6 md:pl-12 lg:pl-20 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="space-y-16 sm:space-y-20 md:space-y-24 relative">
          
          {/* Section number */}
          <div className="section-number text-foreground">
            1
          </div>

          {/* Section title - Large and split */}
          <div className="scroll-trigger relative z-10">
            <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
              <span className="block gradient-animated stagger-reveal" style={{ animationDelay: '0.1s' }}>Racines</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/60 mt-3 sm:mt-4 md:mt-6 font-light tracking-wider uppercase scroll-trigger" style={{ animationDelay: '0.3s' }}>
              le jeu comme langage
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
            
            {/* Left side - Narrative text */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 scroll-trigger">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light">
                    Né dans le monde de la technologie, j'ai grandi avec le code. C'est ici, dans les lignes de code 
                    et les algorithmes, que j'ai forgé ma créativité et ma vitesse d'exécution.
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-border/10">
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light">
                    Un jeune prodige qui code avec l'audace d'un enfant et la vision d'un futur architecte. 
                    J'ai appris à oser, à improviser, à créer. L'école du code libre. Celle qui fera toute la différence plus tard.
                  </p>
                </div>

                <div className="pt-3 sm:pt-4">
                  <p className="text-xs xs:text-sm sm:text-base text-muted-foreground/60 font-light tracking-wider uppercase">
                    Les premiers scripts du destin.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Expertise cards */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="scroll-trigger p-4 sm:p-6 md:p-8 lg:p-10 border border-border/20 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-primary group-hover:translate-x-2 transition-transform duration-300">
                    Data Engineering
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-muted-foreground/70 leading-relaxed font-light">
                    Pipelines ETL/ELT, nettoyage de données, entrepôt de données et intégration
                  </p>
                </div>
              </div>
              
              <div className="scroll-trigger p-4 sm:p-6 md:p-8 lg:p-10 border border-border/20 bg-card/30 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 group" style={{ animationDelay: '0.1s' }}>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-accent group-hover:translate-x-2 transition-transform duration-300">
                    IA & LLMs
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-muted-foreground/70 leading-relaxed font-light">
                    Systèmes RAG, LLMs multimodaux, agents et applications d'IA générative
                  </p>
                </div>
              </div>
              
              <div className="scroll-trigger p-4 sm:p-6 md:p-8 lg:p-10 border border-border/20 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group" style={{ animationDelay: '0.2s' }}>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-primary group-hover:translate-x-2 transition-transform duration-300">
                    Python
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-muted-foreground/70 leading-relaxed font-light">
                    Développement Python avancé, scripts d'automatisation, traitement de données et intégration d'APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
