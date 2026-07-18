"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Bot, MessageCircle, Send, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useChatAssistant } from "@/hooks/use-chat-assistant"
import { profile } from "@/lib/content/profile"
import { ChatTypewriter } from "@/components/chat-typewriter"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { ChatMessage } from "@/lib/chat/types"

function AssistantMessage({
  msg,
  lang,
  isLatest,
  onTyped,
}: {
  msg: ChatMessage
  lang: "fr" | "en"
  isLatest: boolean
  onTyped: () => void
}) {
  const [showLinks, setShowLinks] = useState(!isLatest)

  useEffect(() => {
    if (!isLatest) setShowLinks(true)
  }, [isLatest])

  return (
    <div className="flex justify-start">
      <div className="chat-message chat-message--bot max-w-[85%] text-sm leading-relaxed px-3 py-2 rounded-lg">
        <ChatTypewriter
          text={msg.content}
          active={isLatest}
          onProgress={onTyped}
          onComplete={() => {
            setShowLinks(true)
            onTyped()
          }}
        />
        {showLinks && msg.links && msg.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 chat-links-reveal">
            {msg.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="chat-link text-xs underline underline-offset-2 hover:opacity-80"
                download={link.href.endsWith(".pdf") ? profile.cvFilename : undefined}
              >
                {link.label[lang]}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function ChatAssistant() {
  const { t, language } = useLanguage()
  const lang = language as "fr" | "en"
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const {
    messages,
    sendMessage,
    sendSuggestion,
    clearMessages,
    suggestionIds,
    defaultSuggestionIds,
    getSuggestionLabel,
  } = useChatAssistant(lang)

  const closeAssistant = useCallback(() => {
    setOpen(false)
    setInput("")
    clearMessages()
  }, [clearMessages])

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("portfolio-chat-messages")
    }
  }, [])

  const latestAssistantId = [...messages].reverse().find((m) => m.role === "assistant")?.id

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, open])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAssistant()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, closeAssistant])

  const handleSend = () => {
    if (!input.trim()) return
    sendMessage(input)
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const showSuggestions = messages.length === 0
  const activeSuggestions = showSuggestions ? defaultSuggestionIds : suggestionIds

  return (
    <>
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="chat-bubble fixed bottom-6 right-6 z-[90] flex items-center justify-center w-14 h-14 rounded-full glass border border-border/50 shadow-lg transition-all duration-300 hover:scale-105"
          aria-label={t.chat.openLabel}
        >
          <span className="chat-bubble__pulse" aria-hidden />
          <MessageCircle className="w-6 h-6 text-primary relative z-10" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => closeAssistant()}
          className="chat-bubble chat-bubble--close fixed bottom-6 right-6 z-[91] flex items-center justify-center w-14 h-14 rounded-full glass border shadow-lg transition-all duration-300 hover:scale-105"
          aria-label={t.chat.closeLabel}
        >
          <X className="w-5 h-5 relative z-10" strokeWidth={2.25} />
        </button>
      )}

      <div
        className={`chat-dock ${open ? "chat-dock--open" : ""}`}
        aria-hidden={!open}
      >
        <div className="chat-panel flex flex-col overflow-hidden">
          <div className="chat-panel__header px-3 py-2.5 border-b border-border/40 shrink-0">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-sm font-medium">
                  {t.chat.title} · {profile.shortName}
                </h2>
                <p className="text-[11px] text-muted-foreground mt-0.5">{t.chat.subtitle}</p>
              </div>
              <div
                className="chat-robot-icon flex items-center justify-center w-8 h-8 rounded-full border shrink-0"
                aria-hidden
              >
                <Bot className="w-4 h-4" strokeWidth={2} />
              </div>
            </div>
          </div>

          <ScrollArea className="chat-panel__messages px-4">
            <div className="py-4 space-y-3">
              {messages.length === 0 && (
                <p className="chat-message chat-message--bot text-sm text-muted-foreground px-3 py-2 rounded-lg">
                  {t.chat.welcome}
                </p>
              )}
              {messages.map((msg) =>
                msg.role === "user" ? (
                  <div key={msg.id} className="flex justify-end">
                    <div className="chat-message chat-message--user max-w-[85%] text-sm leading-relaxed px-3 py-2 rounded-lg">
                      <p>{msg.content}</p>
                    </div>
                  </div>
                ) : (
                  <AssistantMessage
                    key={msg.id}
                    msg={msg}
                    lang={lang}
                    isLatest={msg.id === latestAssistantId}
                    onTyped={() => {
                      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
                    }}
                  />
                )
              )}
              <div ref={bottomRef} />
            </div>
          </ScrollArea>

          {activeSuggestions.length > 0 && (
            <div className="px-3 pb-2 shrink-0">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                {t.chat.suggestionsLabel}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(showSuggestions ? defaultSuggestionIds : suggestionIds)
                  .slice(0, showSuggestions ? 6 : 3)
                  .map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => sendSuggestion(id)}
                      className="chat-suggestion-chip text-xs px-2.5 py-1 rounded-full border transition-colors"
                    >
                      {getSuggestionLabel(id)}
                    </button>
                  ))}
              </div>
            </div>
          )}

          <div className="chat-panel__input flex items-end gap-2 px-3 py-2.5 border-t border-border/40 shrink-0">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.chat.placeholder}
              rows={1}
              className="flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground min-h-[36px] max-h-[80px] py-2"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!input.trim()}
              className="chat-send-btn flex items-center justify-center w-9 h-9 rounded-full transition-all disabled:opacity-40"
              aria-label={t.chat.send}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
