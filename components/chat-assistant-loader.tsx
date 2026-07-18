"use client"

import dynamic from "next/dynamic"

const ChatAssistant = dynamic(() => import("./chat-assistant").then((m) => m.ChatAssistant), {
  ssr: false,
  loading: () => null,
})

export function ChatAssistantLoader() {
  return <ChatAssistant />
}
