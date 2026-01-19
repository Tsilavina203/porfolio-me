"use client"

import { useEffect, useRef } from "react"

export function VisitTracker() {
  const hasNotified = useRef(false)

  useEffect(() => {
    // Ne notifier qu'une fois par session
    if (hasNotified.current) return

    // Attendre un peu pour s'assurer que la page est chargée
    const timer = setTimeout(() => {
      // Récupérer les informations du visiteur
      const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : ""
      const referer = typeof document !== "undefined" ? document.referrer : ""
      const timestamp = Date.now()

      console.log('🔔 Notification de visite déclenchée')

      // Appeler l'API pour envoyer l'email
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
    }, 2000) // Attendre 2 secondes après le chargement

    return () => clearTimeout(timer)
  }, [])

  // Ce composant ne rend rien visuellement
  return null
}

