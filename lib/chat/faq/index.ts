import { profileFaq } from "./profile"
import { experienceFaq } from "./experience"
import { projectsFaq } from "./projects"
import { skillsFaq } from "./skills"
import { hrFaq } from "./hr"
import { fallbackFaqEntries } from "./fallback"
import type { ChatFaqEntry } from "@/lib/chat/types"

export const faqEntries: ChatFaqEntry[] = [
  ...profileFaq,
  ...experienceFaq,
  ...projectsFaq,
  ...skillsFaq,
  ...hrFaq,
  ...fallbackFaqEntries,
]

export {
  profileFaq,
  experienceFaq,
  projectsFaq,
  skillsFaq,
  hrFaq,
  fallbackFaqEntries,
}
