"use client"

import { profile } from "@/lib/content/profile"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 py-6 sm:py-8 px-4 sm:px-6 glass">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-xs sm:text-sm text-muted-foreground">
          © {currentYear} {profile.name}. All rights reserved.
        </div>
        <div className="flex gap-4 sm:gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}
