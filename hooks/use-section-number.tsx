"use client"

import { useEffect, useRef, useState } from "react"
import { SectionTransitionOverlay } from "@/components/section-transition-overlay"
import { SectionMarker } from "@/components/section-marker"
import type { SectionId } from "@/lib/section-transitions"

export function useSectionTransition(sectionId: SectionId) {
  const sectionRef = useRef<HTMLElement>(null)
  const [showTransition, setShowTransition] = useState(false)
  const [hideTransition, setHideTransition] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hasPlayedRef = useRef(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)

            setShowTransition(true)
            setHideTransition(false)
            hasPlayedRef.current = true

            timeoutRef.current = setTimeout(() => {
              setHideTransition(true)
              setIsVisible(true)

              entry.target.querySelectorAll(".scroll-trigger").forEach((el, index) => {
                setTimeout(() => el.classList.add("visible"), index * 150)
              })
            }, 1400)
          } else if (hasPlayedRef.current) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
            setShowTransition(false)
            setHideTransition(false)
            setIsVisible(false)
            entry.target.querySelectorAll(".scroll-trigger").forEach((el) => {
              el.classList.remove("visible")
            })
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(node)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      observer.disconnect()
    }
  }, [])

  const TransitionOverlay = () => {
    if (!showTransition) return null
    return <SectionTransitionOverlay sectionId={sectionId} hide={hideTransition} />
  }

  const Marker = () => <SectionMarker sectionId={sectionId} />

  return {
    sectionRef,
    isVisible,
    TransitionOverlay,
    SectionMarker: Marker,

    NumberOverlay: TransitionOverlay,
  }
}

export function useSectionNumber(sectionId: SectionId) {
  return useSectionTransition(sectionId)
}
