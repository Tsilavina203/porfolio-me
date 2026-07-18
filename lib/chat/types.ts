export type ChatLink = {
  label: { fr: string; en: string }
  href: string
}

export type ChatFaqCategory =
  | "profile"
  | "experience"
  | "project"
  | "skill"
  | "hr"
  | "fallback"

export type ChatFaqEntry = {
  id: string
  category: ChatFaqCategory
  intents: string[]
  keywords?: string[]
  answer: { fr: string; en: string }
  links?: ChatLink[]
}

export type ChatMessageRole = "user" | "assistant"

export type ChatMessage = {
  id: string
  role: ChatMessageRole
  content: string
  links?: ChatLink[]
  faqId?: string
}

export type ChatSearchResult = {
  entry: ChatFaqEntry
  score: number
}

export type Language = "fr" | "en"
