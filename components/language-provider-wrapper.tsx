"use client"

import type React from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { HtmlLangSync } from "@/components/html-lang-sync"

export function LanguageProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <HtmlLangSync />
      {children}
    </LanguageProvider>
  )
}
