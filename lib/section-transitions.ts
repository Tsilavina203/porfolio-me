export type SectionId = "about" | "skills" | "projects" | "experience" | "contact"

export const sectionTransitionMeta: Record<
  SectionId,
  { label: { fr: string; en: string }; accent: "primary" | "accent" }
> = {
  about: { label: { fr: "Profil", en: "Profile" }, accent: "primary" },
  skills: { label: { fr: "Compétences", en: "Skills" }, accent: "accent" },
  projects: { label: { fr: "Projets", en: "Projects" }, accent: "primary" },
  experience: { label: { fr: "Parcours", en: "Journey" }, accent: "accent" },
  contact: { label: { fr: "Contact", en: "Contact" }, accent: "primary" },
}
