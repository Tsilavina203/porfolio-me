"use client"

import { useLanguage } from "@/contexts/language-context"
import { sectionTransitionMeta, type SectionId } from "@/lib/section-transitions"

type SectionTransitionOverlayProps = {
  sectionId: SectionId
  hide: boolean
}

export function SectionTransitionOverlay({ sectionId, hide }: SectionTransitionOverlayProps) {
  const { language } = useLanguage()
  const lang = language as "en" | "fr"
  const meta = sectionTransitionMeta[sectionId]

  return (
    <div
      className={`section-transition-overlay ${hide ? "section-transition-overlay--exit" : ""}`}
      aria-hidden="true"
    >
      <div className="section-transition-overlay__backdrop" />

      <div className={`section-transition-stage section-transition-stage--${sectionId}`}>
        {sectionId === "about" && <AboutTransition />}
        {sectionId === "skills" && <SkillsTransition />}
        {sectionId === "projects" && <ProjectsTransition />}
        {sectionId === "experience" && <ExperienceTransition />}
        {sectionId === "contact" && <ContactTransition />}

        <p
          className={`section-transition-label section-transition-label--${meta.accent} ${
            hide ? "section-transition-label--exit" : ""
          }`}
        >
          {meta.label[lang]}
        </p>
      </div>

      <div className="section-transition-scanline" />
    </div>
  )
}

function AboutTransition() {
  return (
    <div className="transition-about">
      <div className="transition-about__core" />
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="transition-about__branch" style={{ ["--i" as string]: i }} />
      ))}
      <div className="transition-about__ring transition-about__ring--1" />
      <div className="transition-about__ring transition-about__ring--2" />
    </div>
  )
}

function SkillsTransition() {
  return (
    <div className="transition-skills">
      <div className="transition-skills__hex" />
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className="transition-skills__orbit" style={{ ["--i" as string]: i }} />
      ))}
    </div>
  )
}

function ProjectsTransition() {
  return (
    <div className="transition-projects">
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} className="transition-projects__cell" style={{ ["--i" as string]: i }} />
      ))}
      <div className="transition-projects__beam" />
    </div>
  )
}

function ExperienceTransition() {
  return (
    <div className="transition-experience">
      <div className="transition-experience__track" />
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="transition-experience__node" style={{ ["--i" as string]: i }} />
      ))}
      <div className="transition-experience__pulse" />
    </div>
  )
}

function ContactTransition() {
  return (
    <div className="transition-contact">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="transition-contact__ripple" style={{ ["--i" as string]: i }} />
      ))}
      <div className="transition-contact__hub" />
      {[0, 1, 2].map((i) => (
        <span key={i} className="transition-contact__signal" style={{ ["--i" as string]: i }} />
      ))}
    </div>
  )
}
