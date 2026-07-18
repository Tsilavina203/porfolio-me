import { projects } from "@/lib/content/projects"
import type { ChatFaqEntry } from "@/lib/chat/types"

const featured = projects.filter((p) => p.featured)

const projectIntents: Record<string, string[]> = {
  "quark-oia": ["quark oia", "oia platform", "oia", "quark projet", "quark project"],
  swiftask: ["swiftask project", "swiftask plateforme", "swiftask platform"],
  sayna: ["sayna project", "sayna migration", "migration crm"],
  accesbanque: ["access banque api", "api bancaire", "banking api project"],
  akata: ["akata project", "akata logistique", "logistics platform"],
  "rag-legal": ["rag legal", "rag juridique", "legal documents", "documents juridiques"],
}

function buildProjectFaq(): ChatFaqEntry[] {
  const entries: ChatFaqEntry[] = []

  for (const proj of featured) {
    const baseIntents = projectIntents[proj.id] ?? [proj.title.toLowerCase(), proj.id]
    const link = proj.link
      ? { label: { fr: proj.title, en: proj.title }, href: proj.link }
      : undefined

    entries.push({
      id: `proj-${proj.id}-summary`,
      category: "project",
      intents: [...baseIntents, "projet", "project", "what is", "c'est quoi"],
      keywords: [proj.title.toLowerCase(), "portfolio"],
      answer: {
        fr: `${proj.title} : ${proj.description.fr} Impact : ${proj.impact.fr}.`,
        en: `${proj.title}: ${proj.description.en} Impact: ${proj.impact.en}.`,
      },
      links: link ? [link] : undefined,
    })

    entries.push({
      id: `proj-${proj.id}-tech`,
      category: "project",
      intents: [...baseIntents, "solution", "problem", "problème", "stack", "architecture", "how", "comment"],
      keywords: ["technologie", "technology", "built with"],
      answer: {
        fr: `Problème : ${proj.problem.fr} Solution : ${proj.solution.fr} Stack : ${proj.stack.join(", ")}.`,
        en: `Problem: ${proj.problem.en} Solution: ${proj.solution.en} Stack: ${proj.stack.join(", ")}.`,
      },
      links: link ? [link] : undefined,
    })
  }

  return entries
}

export const projectsFaq: ChatFaqEntry[] = buildProjectFaq()
