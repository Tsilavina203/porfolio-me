"use client"

import { useEffect, useState, useRef } from "react"

export function useSectionNumber(sectionNumber: number) {
  const [showNumber, setShowNumber] = useState(false)
  const [hideNumber, setHideNumber] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const numberRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Show the big number first
            setShowNumber(true)
            
            // After a delay, hide the number and show content
            setTimeout(() => {
              setHideNumber(true)
              setIsVisible(true)
              
              // Add active class to reveal elements
              const revealElements = entry.target.querySelectorAll('.scroll-trigger')
              revealElements.forEach((el, index) => {
                setTimeout(() => {
                  el.classList.add('visible')
                }, index * 150)
              })
            }, 1200) // Show number for 1.2 seconds
          } else {
            // Reset when leaving viewport
            setShowNumber(false)
            setHideNumber(false)
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.05 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const NumberOverlay = () => {
    if (!showNumber) return null
    
    return (
      <div 
        ref={numberRef}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm transition-all duration-1000 ${
          hideNumber ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'
        }`}
        style={{
          transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div 
          className={`relative text-[35vw] sm:text-[28vw] md:text-[22vw] lg:text-[18vw] xl:text-[15vw] font-extralight transition-all duration-1200 ${
            hideNumber 
              ? 'opacity-0 scale-200 blur-2xl text-foreground/0' 
              : 'opacity-100 scale-100 blur-0 text-foreground/15'
          }`}
          style={{
            textShadow: '0 0 150px rgba(255, 255, 255, 0.15), 0 0 300px rgba(255, 255, 255, 0.1)',
            letterSpacing: '-0.08em',
            lineHeight: '0.75',
            fontVariantNumeric: 'tabular-nums',
            animation: hideNumber ? 'none' : 'numberReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
          }}
        >
          {sectionNumber}
        </div>
      </div>
    )
  }

  return {
    sectionRef,
    showNumber,
    hideNumber,
    isVisible,
    NumberOverlay
  }
}

