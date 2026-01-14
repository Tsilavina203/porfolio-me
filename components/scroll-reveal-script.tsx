"use client"

import { useEffect } from "react"
import { initScrollReveal } from "@/lib/scroll-reveal"

export function ScrollRevealScript() {
  useEffect(() => {
    initScrollReveal()
  }, [])

  return null
}

