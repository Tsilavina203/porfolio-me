"use client"

import { useCallback, useMemo, useState } from "react"
import { getAnswerText, getFaqById, searchFaq } from "@/lib/chat/search"
import {
  getContextualSuggestionIds,
  suggestionFaqIds,
  suggestionLabels,
} from "@/lib/chat/suggestions"
import type { ChatMessage, Language } from "@/lib/chat/types"

const MAX_MESSAGES = 20

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

export function useChatAssistant(lang: Language) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [lastCategory, setLastCategory] = useState<string>("profile")

  const suggestionIds = useMemo(() => {
    const ids = getContextualSuggestionIds(lastCategory)
    return ids.slice(0, 3)
  }, [lastCategory])

  const defaultSuggestionIds = useMemo(() => [...suggestionFaqIds], [])

  const getSuggestionLabel = useCallback(
    (faqId: string) => {
      const label = suggestionLabels[faqId]
      if (label) return label[lang]
      const entry = getFaqById(faqId)
      if (entry?.intents[0]) return entry.intents[0]
      return faqId
    },
    [lang]
  )

  const sendMessage = useCallback(
    (query: string) => {
      const trimmed = query.trim()
      if (!trimmed) return

      const userMessage: ChatMessage = {
        id: createId(),
        role: "user",
        content: trimmed,
      }

      const { entry } = searchFaq(trimmed, lang)
      setLastCategory(entry.category)

      const assistantMessage: ChatMessage = {
        id: createId(),
        role: "assistant",
        content: getAnswerText(entry, lang),
        links: entry.links,
        faqId: entry.id,
      }

      setMessages((prev) => [...prev, userMessage, assistantMessage].slice(-MAX_MESSAGES))
    },
    [lang]
  )

  const sendSuggestion = useCallback(
    (faqId: string) => {
      const entry = getFaqById(faqId)
      if (!entry) return

      const label = getSuggestionLabel(faqId)
      const userMessage: ChatMessage = {
        id: createId(),
        role: "user",
        content: label,
      }

      setLastCategory(entry.category)

      const assistantMessage: ChatMessage = {
        id: createId(),
        role: "assistant",
        content: getAnswerText(entry, lang),
        links: entry.links,
        faqId: entry.id,
      }

      setMessages((prev) => [...prev, userMessage, assistantMessage].slice(-MAX_MESSAGES))
    },
    [lang, getSuggestionLabel]
  )

  const clearMessages = useCallback(() => {
    setMessages([])
    setLastCategory("profile")
  }, [])

  return {
    messages,
    sendMessage,
    sendSuggestion,
    clearMessages,
    suggestionIds,
    defaultSuggestionIds,
    getSuggestionLabel,
  }
}
