import Fuse from "fuse.js"
import { faqIndex } from "@/lib/chat/build-index"
import { fallbackFaq } from "@/lib/chat/faq/fallback"
import type { ChatFaqEntry, ChatSearchResult, Language } from "@/lib/chat/types"

const SCORE_THRESHOLD = 0.35

const fuse = new Fuse(faqIndex, {
  keys: [
    { name: "intents", weight: 0.5 },
    { name: "keywords", weight: 0.3 },
    { name: "answer.fr", weight: 0.1 },
    { name: "answer.en", weight: 0.1 },
  ],
  threshold: SCORE_THRESHOLD,
  ignoreLocation: true,
  includeScore: true,
})

export function searchFaq(query: string, _lang: Language): ChatSearchResult {
  const trimmed = query.trim()
  if (!trimmed) {
    return { entry: fallbackFaq, score: 1 }
  }

  const results = fuse.search(trimmed)
  if (results.length === 0 || (results[0].score ?? 1) > SCORE_THRESHOLD) {
    return { entry: fallbackFaq, score: results[0]?.score ?? 1 }
  }

  const best = results[0]
  return {
    entry: best.item as ChatFaqEntry,
    score: best.score ?? 0,
  }
}

export function getFaqById(id: string): ChatFaqEntry | undefined {
  return faqIndex.find((e) => e.id === id)
}

export function getAnswerText(entry: ChatFaqEntry, lang: Language): string {
  return entry.answer[lang]
}
