"use client"

import { useEffect } from "react"

function log(hypothesisId: string, message: string, data: Record<string, unknown>) {
  fetch("http://127.0.0.1:7243/ingest/5266e3a9-9f75-430f-bf70-18c8f2a6a8f0", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: "debug-session",
      runId: "pre-fix",
      hypothesisId,
      location: "components/debug/dev-indicator-probe.tsx",
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {})
}

export function DevIndicatorProbe() {
  useEffect(() => {
    // #region agent log
    log("H_env", "probe mounted", {
      nodeEnv: process.env.NODE_ENV,
      href: typeof window !== "undefined" ? window.location.href : "no-window",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "no-navigator",
    })
    // #endregion

    if (typeof document === "undefined") return

    const tryDetect = () => {
      const bodyText = document.body?.innerText?.slice(0, 2000) ?? ""
      const hasNextString = /next\.js/i.test(bodyText) || /nextjs/i.test(bodyText)

      const candidates = Array.from(document.querySelectorAll("body *"))
        .slice(0, 2500)
        .map((el) => {
          const aria = el.getAttribute("aria-label") || ""
          const title = el.getAttribute("title") || ""
          const id = el.id || ""
          const cls = (el.getAttribute("class") || "").slice(0, 300)
          const text = (el.textContent || "").trim().slice(0, 30)
          const tag = el.tagName.toLowerCase()
          const hit = /\bnext\b/i.test(aria + " " + title + " " + id + " " + cls + " " + text)
          return hit ? { tag, id, aria, title, cls, text } : null
        })
        .filter(Boolean)

      // #region agent log
      log("H_dom", "dom scan", {
        hasNextString,
        hits: candidates.slice(0, 15),
        hitCount: candidates.length,
      })
      // #endregion
    }

    // Run once ASAP (no timeouts)
    tryDetect()

    const observer = new MutationObserver((mutations) => {
      // #region agent log
      log("H_inject", "mutation observed", {
        mutationCount: mutations.length,
        addedNodes: mutations.reduce((acc, m) => acc + (m.addedNodes?.length ?? 0), 0),
      })
      // #endregion
      tryDetect()
    })

    observer.observe(document.documentElement, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}


