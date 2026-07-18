import { faqEntries } from "@/lib/chat/faq"
import type { ChatFaqEntry } from "@/lib/chat/types"

export type SearchableFaqEntry = ChatFaqEntry & {
  searchText: string
}

export function buildFaqIndex(): SearchableFaqEntry[] {
  return faqEntries
    .filter((entry) => entry.id !== "fallback-unknown")
    .map((entry) => ({
      ...entry,
      searchText: [
        ...entry.intents,
        ...(entry.keywords ?? []),
        entry.answer.fr,
        entry.answer.en,
      ].join(" "),
    }))
}

export const faqIndex = buildFaqIndex()
