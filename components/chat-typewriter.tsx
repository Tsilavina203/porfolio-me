"use client"

import { useEffect, useRef, useState } from "react"

type ChatTypewriterProps = {
  text: string
  active: boolean
  onComplete?: () => void
  onProgress?: () => void
  className?: string
}

export function ChatTypewriter({
  text,
  active,
  onComplete,
  onProgress,
  className,
}: ChatTypewriterProps) {
  const [displayed, setDisplayed] = useState(active ? "" : text)
  const [done, setDone] = useState(!active)
  const onCompleteRef = useRef(onComplete)
  const onProgressRef = useRef(onProgress)

  useEffect(() => {
    onCompleteRef.current = onComplete
    onProgressRef.current = onProgress
  }, [onComplete, onProgress])

  useEffect(() => {
    if (!active) {
      setDisplayed(text)
      setDone(true)
      return
    }

    setDisplayed("")
    setDone(false)

    let index = 0
    const chunk = text.length > 280 ? 3 : text.length > 140 ? 2 : 1
    const delay = text.length > 280 ? 14 : 18

    const tick = () => {
      index = Math.min(index + chunk, text.length)
      setDisplayed(text.slice(0, index))
      onProgressRef.current?.()

      if (index >= text.length) {
        setDone(true)
        window.clearInterval(interval)
        onCompleteRef.current?.()
      }
    }

    tick()
    const interval = window.setInterval(tick, delay)
    return () => window.clearInterval(interval)
  }, [text, active])

  return (
    <p className={className}>
      {displayed}
      {active && !done && <span className="chat-typewriter-cursor" aria-hidden />}
    </p>
  )
}
