"use client"

import { useState, useEffect } from "react"
import { Menu, X, Languages } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

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
      {/* Fixed header with name and image */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'opacity-100 bg-background/80 backdrop-blur-sm' : 'opacity-90'
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-5">
          {/* Left side - Name and Image */}
          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href="#"
              className="flex items-center gap-3 md:gap-4 group hover:opacity-80 transition-all duration-300"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-foreground/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                <Image
                  src="/tsilavo.png"
                  alt="Tantely"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  priority
                  sizes="(max-width: 768px) 40px, 48px"
                />
              </div>
              <span className="text-base md:text-lg font-light tracking-wider text-foreground/90 group-hover:text-primary transition-colors duration-300 uppercase">
                Tantely
              </span>
            </a>
          </div>

          {/* Right side - Language toggle and Menu button */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language toggle icon */}
            <button
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="group relative p-2 md:p-3 flex items-center justify-center hover:opacity-80 transition-all duration-300 cursor-pointer"
              aria-label="Toggle language"
              title={language === "en" ? "Switch to French" : "Passer en anglais"}
            >
              <Languages className="w-5 h-5 md:w-6 md:h-6 text-foreground/80 group-hover:text-primary transition-colors duration-300" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] md:text-xs font-light text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase">
                {language === "en" ? "FR" : "EN"}
              </span>
            </button>

            {/* Desktop: Minimal menu button */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative p-4 md:p-6 flex items-center justify-center cursor-pointer"
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
              className="md:hidden p-4 flex items-center justify-center cursor-pointer"
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
        </div>

        {/* Menu overlay - full screen when open */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          >
            <div 
              className="h-full flex flex-col items-center justify-center space-y-8 md:space-y-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - top right */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-3 md:p-4 glass border border-border/30 rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group z-50 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-foreground/80 group-hover:text-primary transition-colors duration-300" />
              </button>

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
