"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 py-6 sm:py-8 px-4 sm:px-6 glass">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-xs sm:text-sm text-muted-foreground">
          © {currentYear} ANDRIATAFITASOA Tanteliniaina. All rights reserved.
        </div>
        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
