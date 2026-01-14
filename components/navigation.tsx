"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <>
      {/* Fixed minimal menu - inspired by Dembélé site */}
      <nav 
        className={`fixed top-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-90'
        }`}
      >
        <div className="relative">
          {/* Desktop: Minimal menu button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative p-4 md:p-6 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span 
                  className={`block w-6 h-px bg-foreground/80 transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span 
                  className={`block w-6 h-px bg-foreground/80 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span 
                  className={`block w-6 h-px bg-foreground/80 transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile: Menu button */}
          <button
            className="md:hidden p-4 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Menu overlay - full screen when open */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          >
            <div 
              className="h-full flex flex-col items-center justify-center space-y-8 md:space-y-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation items */}
              <nav className="flex flex-col items-center space-y-6 md:space-y-8">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative text-2xl md:text-4xl lg:text-5xl font-light text-foreground/80 hover:text-foreground transition-all duration-500 hover:scale-105"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: isOpen ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></span>
                  </a>
                ))}
              </nav>

              {/* Language selector */}
              <div className="flex items-center gap-4 pt-8 border-t border-border/30">
                <button
                  onClick={() => {
                    setLanguage("en")
                  }}
                  className={`px-4 py-2 text-sm font-light tracking-wider uppercase transition-all duration-300 ${
                    language === "en" 
                      ? "text-primary border-b-2 border-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  EN
                </button>
                <span className="text-muted-foreground/50">/</span>
                <button
                  onClick={() => {
                    setLanguage("fr")
                  }}
                  className={`px-4 py-2 text-sm font-light tracking-wider uppercase transition-all duration-300 ${
                    language === "fr" 
                      ? "text-primary border-b-2 border-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll indicator - minimal dot navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group relative flex items-center"
            aria-label={item.label}
          >
            <span className="w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-primary transition-all duration-300"></span>
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-light text-muted-foreground whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </>
  )
}
