export const suggestionFaqIds = [
  "who-are-you",
  "exp-quark-overview",
  "skill-data-engineering",
  "availability",
  "download-cv",
  "email",
] as const

export type SuggestionFaqId = (typeof suggestionFaqIds)[number]

export const suggestionLabels: Record<string, { fr: string; en: string }> = {
  "who-are-you": { fr: "Qui es-tu ?", en: "Who are you?" },
  "exp-quark-overview": { fr: "Expérience chez Quark ?", en: "Experience at Quark?" },
  "skill-data-engineering": { fr: "Compétences Data ?", en: "Data Engineering skills?" },
  availability: { fr: "Disponible en remote ?", en: "Open to remote?" },
  "download-cv": { fr: "Télécharger le CV", en: "Download CV" },
  email: { fr: "Email de contact", en: "Contact email" },
  linkedin: { fr: "Profil LinkedIn", en: "LinkedIn profile" },
  "exp-swiftask-overview": { fr: "Expérience Swiftask ?", en: "Swiftask experience?" },
  "hr-biggest-project": { fr: "Plus grand projet ?", en: "Biggest project?" },
  "proj-quark-oia-summary": { fr: "Projet Quark OIA ?", en: "Quark OIA project?" },
  "skill-rag": { fr: "Tu maîtrises RAG ?", en: "Do you know RAG?" },
  "skill-python": { fr: "Pourquoi Python ?", en: "Why Python?" },
  "skill-fastapi": { fr: "Pourquoi FastAPI ?", en: "Why FastAPI?" },
  "hr-contact-hiring": { fr: "Comment me recruter ?", en: "How to hire you?" },
}

export const contextualSuggestionIds: Record<string, string[]> = {
  profile: ["availability", "download-cv", "linkedin"],
  experience: ["exp-quark-overview", "exp-swiftask-overview", "hr-biggest-project"],
  project: ["proj-quark-oia-summary", "skill-rag", "hr-biggest-project"],
  skill: ["skill-python", "skill-fastapi", "skill-rag"],
  hr: ["availability", "hr-contact-hiring", "download-cv"],
  fallback: ["who-are-you", "email", "download-cv"],
}

export function getContextualSuggestionIds(category: string): string[] {
  return contextualSuggestionIds[category] ?? suggestionFaqIds.slice(0, 3)
}
