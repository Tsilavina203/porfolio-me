"use client"

import { useLanguage } from "@/contexts/language-context"
import { useSectionNumber } from "@/hooks/use-section-number"
import { profile } from "@/lib/content/profile"

export function AboutSection() {
  const { t, language } = useLanguage()
  const lang = language as "fr" | "en"
  const { sectionRef, isVisible, TransitionOverlay, SectionMarker } = useSectionNumber("about")

  const pillars = [t.about.pillars.data, t.about.pillars.ai, t.about.pillars.languages]

  return (
    <>
      <TransitionOverlay />
      <section
        ref={sectionRef}
        id="about"
        className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 relative flex items-center"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background z-0 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="absolute inset-0 -z-10 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div
          className={`max-w-6xl mx-auto w-full relative z-10 px-4 sm:px-6 md:pl-12 lg:pl-20 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="space-y-16 sm:space-y-20 md:space-y-24 relative">
            <SectionMarker />

            <div className="scroll-trigger relative z-10">
              <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
                <span className="block gradient-animated stagger-reveal" style={{ animationDelay: "0.1s" }}>
                  {t.about.title}
                </span>
              </h2>
              <p
                className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/60 mt-3 sm:mt-4 md:mt-6 font-light tracking-wider uppercase scroll-trigger"
                style={{ animationDelay: "0.3s" }}
              >
                {t.about.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 scroll-trigger">
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light">
                  {t.about.narrative1}
                </p>
                <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-border/10">
                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/80 leading-relaxed font-light">
                    {t.about.narrative2}
                  </p>
                </div>
                <div className="pt-3 sm:pt-4">
                  <p className="text-xs xs:text-sm sm:text-base text-muted-foreground/60 font-light tracking-wider uppercase">
                    {t.about.narrative3}
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {pillars.map((pillar, i) => (
                  <div
                    key={pillar.title}
                    className="scroll-trigger p-4 sm:p-6 md:p-8 lg:p-10 border border-border/20 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-primary group-hover:translate-x-2 transition-transform duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground/70 leading-relaxed font-light mt-2">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-trigger pt-6 border-t border-border/10 space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground/70 font-light leading-relaxed">{profile.summary[lang]}</p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {profile.education.map((e) => (
                  <span
                    key={e.period}
                    className="text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 border border-border/30 text-muted-foreground/80 leading-snug"
                  >
                    {e.degree[lang]} · {e.period}
                  </span>
                ))}
                {profile.awards.map((a) => (
                  <span
                    key={a.year}
                    className="text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 border border-primary/20 text-primary/80 leading-snug"
                  >
                    {a.year} — {a.title[lang]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
