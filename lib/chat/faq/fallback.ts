import { profile } from "@/lib/content/profile"
import type { ChatFaqEntry } from "@/lib/chat/types"

export const fallbackFaq: ChatFaqEntry = {
  id: "fallback-unknown",
  category: "fallback",
  intents: [],
  answer: {
    fr: `Je n'ai pas cette information précise dans mon assistant. Contactez-moi directement : ${profile.email} · LinkedIn · CV PDF.`,
    en: `I don't have that specific information in my assistant. Contact me directly: ${profile.email} · LinkedIn · CV PDF.`,
  },
  links: [
    { label: { fr: "Email", en: "Email" }, href: `mailto:${profile.email}` },
    { label: { fr: "LinkedIn", en: "LinkedIn" }, href: profile.linkedin },
    { label: { fr: "Télécharger le CV", en: "Download CV" }, href: profile.cvPath },
  ],
}

export const fallbackFaqEntries: ChatFaqEntry[] = [fallbackFaq]
