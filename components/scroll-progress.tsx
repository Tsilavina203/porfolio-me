"use client"

import { useEffect, useRef, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const lastScrollY = useRef(0)
  const scrollIdleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let frame = 0

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = winHeightPx > 0 ? (scrollPx / winHeightPx) * 100 : 0

      setScrollProgress(scrolled)
      setIsScrollingDown(scrollPx > lastScrollY.current && scrollPx > 24)
      lastScrollY.current = scrollPx

      if (scrollIdleTimer.current) clearTimeout(scrollIdleTimer.current)
      scrollIdleTimer.current = setTimeout(() => setIsScrollingDown(false), 180)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateScrollProgress)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    updateScrollProgress()

    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
      if (scrollIdleTimer.current) clearTimeout(scrollIdleTimer.current)
    }
  }, [])

  const markerLeft = Math.max(0, Math.min(100, 100 - scrollProgress))

  return (
    <div
      className={`scroll-progress fixed left-0 right-0 z-[100] pointer-events-none ${
        isScrollingDown ? "scroll-progress--active" : ""
      } ${scrollProgress > 0 ? "scroll-progress--visible" : ""}`}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    >
      <div className="scroll-progress__halo" />
      <div className="scroll-progress__track" />
      <div
        className="scroll-progress__fill"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      >
        <div className="scroll-progress__beam" />
        <div className="scroll-progress__shimmer" />
      </div>
      {scrollProgress > 0 && (
        <div
          className="scroll-progress__marker"
          style={{ left: `calc(${markerLeft}% - 3.5px)` }}
        />
      )}
    </div>
  )
}
