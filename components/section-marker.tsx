"use client"

import type { SectionId } from "@/lib/section-transitions"

type SectionMarkerProps = {
  sectionId: SectionId
}

export function SectionMarker({ sectionId }: SectionMarkerProps) {
  return (
    <div className={`section-marker section-marker--${sectionId}`} aria-hidden="true">
      <span className="section-marker__glow" />
      <span className="section-marker__line" />
      <span className="section-marker__dot" />
    </div>
  )
}
