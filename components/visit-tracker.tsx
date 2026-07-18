"use client"

import { useEffect, useRef } from "react"

export function VisitTracker() {
  const hasNotified = useRef(false)

  useEffect(() => {

    if (hasNotified.current) return

    const timer = setTimeout(() => {

      const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : ""
      const referer = typeof document !== "undefined" ? document.referrer : ""
      const timestamp = Date.now()

      console.log('🔔 Notification de visite déclenchée')

      fetch("/api/notify-visit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userAgent,
          referer,
          timestamp,
        }),
      })
        .then(async (response) => {
          const data = await response.json()

          if (!response.ok) {
            console.error("❌ Erreur lors de l'envoi de la notification:", data)
            console.error("❌ Détails:", data.message || data.error)
          } else {
            console.log("✅ Notification envoyée avec succès!")
            console.log("✅ Message ID:", data.messageId)
            console.log("✅ Message:", data.message)
          }
        })
        .catch((error) => {
          console.error("❌ Erreur réseau lors de l'envoi de la notification:", error)
        })

      hasNotified.current = true
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return null
}

