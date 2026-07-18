import { experiences } from "@/lib/content/experience"
import type { ChatFaqEntry } from "@/lib/chat/types"

const experienceIntents: Record<string, string[]> = {
  quark: ["quark", "oia", "quark développement", "quark developpement", "current job", "poste actuel", "job actuel"],
  swiftask: ["swiftask", "swiftask technology", "swift task"],
  akata: ["akata", "akata goavana", "goavana"],
  accesbanque: ["access banque", "acces banque", "banque", "banking"],
  sayna: ["sayna", "zendesk", "crm migration"],
  chua: ["chua", "data analyst chua"],
}

function buildExperienceFaq(): ChatFaqEntry[] {
  const entries: ChatFaqEntry[] = []

  for (const exp of experiences) {
    const baseIntents = experienceIntents[exp.id] ?? [exp.company.toLowerCase(), exp.id]
    const link = exp.link
      ? { label: { fr: exp.company, en: exp.company }, href: exp.link }
      : undefined

    entries.push({
      id: `exp-${exp.id}-overview`,
      category: "experience",
      intents: [...baseIntents, "expérience", "experience", "worked at", "travaillé"],
      keywords: [exp.role.fr.toLowerCase(), exp.role.en.toLowerCase(), exp.location.toLowerCase()],
      answer: {
        fr: `${exp.role.fr} chez ${exp.company} (${exp.period}) — ${exp.location}. ${exp.highlights.fr[0]}`,
        en: `${exp.role.en} at ${exp.company} (${exp.period}) — ${exp.location}. ${exp.highlights.en[0]}`,
      },
      links: link ? [link] : undefined,
    })

    entries.push({
      id: `exp-${exp.id}-stack`,
      category: "experience",
      intents: [...baseIntents, "stack", "technologies", "tech", "tools", "outils"],
      keywords: ["compétences", "skills", exp.company.toLowerCase()],
      answer: {
        fr: `Stack principale chez ${exp.company} : ${exp.stack.slice(0, 8).join(", ")}${exp.stack.length > 8 ? "…" : ""}.`,
        en: `Main stack at ${exp.company}: ${exp.stack.slice(0, 8).join(", ")}${exp.stack.length > 8 ? "…" : ""}.`,
      },
      links: link ? [link] : undefined,
    })

    entries.push({
      id: `exp-${exp.id}-achievements`,
      category: "experience",
      intents: [...baseIntents, "réalisations", "achievements", "accomplishments", "highlights", "missions"],
      keywords: ["projets", "projects", "results", "résultats"],
      answer: {
        fr: `Réalisations chez ${exp.company} : ${exp.highlights.fr.join(" · ")}.`,
        en: `Achievements at ${exp.company}: ${exp.highlights.en.join(" · ")}.`,
      },
      links: link ? [link] : undefined,
    })
  }

  return entries
}

export const experienceFaq: ChatFaqEntry[] = buildExperienceFaq()
