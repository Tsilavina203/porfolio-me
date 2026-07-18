import { profile } from "@/lib/content/profile"
import type { ChatFaqEntry } from "@/lib/chat/types"

const cvLink = {
  label: { fr: "Télécharger le CV", en: "Download CV" },
  href: profile.cvPath,
}

const linkedinLink = {
  label: { fr: "LinkedIn", en: "LinkedIn" },
  href: profile.linkedin,
}

const emailLink = {
  label: { fr: "Email", en: "Email" },
  href: `mailto:${profile.email}`,
}

export const profileFaq: ChatFaqEntry[] = [
  {
    id: "who-are-you",
    category: "profile",
    intents: ["qui es-tu", "who are you", "présentation", "presentation", "about you", "parle moi de toi", "tell me about yourself", "tantely", "tanteliniaina"],
    keywords: ["profil", "profile", "identity", "identité"],
    answer: {
      fr: `Je suis ${profile.name}, ${profile.title.fr}. ${profile.summary.fr}. Basé à ${profile.location}, je conçois des plateformes Data et des solutions IA en production depuis ${profile.yearsExperience} ans.`,
      en: `I'm ${profile.name}, ${profile.title.en}. ${profile.summary.en}. Based in ${profile.location}, I've been building production Data platforms and AI solutions for ${profile.yearsExperience} years.`,
    },
    links: [cvLink, linkedinLink],
  },
  {
    id: "title-role",
    category: "profile",
    intents: ["métier", "job title", "role", "poste", "data engineer", "fullstack", "what do you do", "que fais-tu"],
    keywords: ["developer", "développeur", "engineer", "ingénieur"],
    answer: {
      fr: `Mon métier : ${profile.title.fr}. Je combine Data Engineering (ETL, pipelines, gouvernance), développement backend Python/FastAPI et IA générative (LLMs, RAG, agents) pour des systèmes scalables en production.`,
      en: `My role: ${profile.title.en}. I combine Data Engineering (ETL, pipelines, governance), Python/FastAPI backend development and generative AI (LLMs, RAG, agents) for scalable production systems.`,
    },
  },
  {
    id: "experience-years",
    category: "profile",
    intents: ["expérience", "experience", "years", "années", "4 ans", "4 years", "seniority", "ancienneté"],
    keywords: ["how long", "depuis combien"],
    answer: {
      fr: `J'ai ${profile.yearsExperience} années d'expérience en développement logiciel, Data Engineering et Intelligence Artificielle, avec ${profile.projectsCount} projets livrés et ${profile.technologiesCount} technologies maîtrisées.`,
      en: `I have ${profile.yearsExperience} years of experience in software development, Data Engineering and Artificial Intelligence, with ${profile.projectsCount} projects delivered and ${profile.technologiesCount} technologies mastered.`,
    },
  },
  {
    id: "location",
    category: "profile",
    intents: ["madagascar", "location", "localisation", "where are you", "où es-tu", "based in", "pays"],
    keywords: ["fianarantsoa", "country"],
    answer: {
      fr: `Je suis basé à ${profile.location}. Je travaille en remote avec des équipes internationales (France, etc.) depuis plusieurs années.`,
      en: `I'm based in ${profile.location}. I've been working remotely with international teams (France, etc.) for several years.`,
    },
  },
  {
    id: "availability",
    category: "profile",
    intents: ["disponible", "available", "availability", "remote", "disponibilité", "open to", "recrutement", "hiring"],
    keywords: ["freelance", "cdi", "job", "opportunity", "opportunité"],
    answer: {
      fr: "Je suis ouvert au remote et aux opportunités internationales. N'hésitez pas à me contacter pour discuter d'un poste ou d'une mission.",
      en: "I'm open to remote opportunities and international roles. Feel free to reach out to discuss a position or mission.",
    },
    links: [emailLink, linkedinLink],
  },
  {
    id: "email",
    category: "profile",
    intents: ["email", "mail", "contact", "contacter", "reach you", "écrire"],
    keywords: ["courriel", "adresse"],
    answer: {
      fr: `Vous pouvez me joindre par email : ${profile.email}. Je réponds généralement sous 24–48 h.`,
      en: `You can reach me by email: ${profile.email}. I usually respond within 24–48 hours.`,
    },
    links: [emailLink],
  },
  {
    id: "phone",
    category: "profile",
    intents: ["téléphone", "phone", "numéro", "number", "call", "appeler"],
    keywords: ["mobile", "whatsapp"],
    answer: {
      fr: `Mon numéro : ${profile.phone}. Pour un premier contact professionnel, l'email ou LinkedIn est préférable.`,
      en: `My phone number: ${profile.phone}. For a first professional contact, email or LinkedIn is preferred.`,
    },
  },
  {
    id: "linkedin",
    category: "profile",
    intents: ["linkedin", "profil linkedin", "linkedin profile", "réseau", "network"],
    keywords: ["social", "professional"],
    answer: {
      fr: `Mon profil LinkedIn : ${profile.linkedin}. Vous y trouverez mon parcours détaillé et mes recommandations.`,
      en: `My LinkedIn profile: ${profile.linkedin}. You'll find my detailed background and recommendations there.`,
    },
    links: [linkedinLink],
  },
  {
    id: "download-cv",
    category: "profile",
    intents: ["cv", "resume", "télécharger", "download", "curriculum", "pdf"],
    keywords: ["curriculum vitae", "document"],
    answer: {
      fr: "Vous pouvez télécharger mon CV au format PDF directement depuis ce portfolio.",
      en: "You can download my CV in PDF format directly from this portfolio.",
    },
    links: [cvLink],
  },
  {
    id: "education-awards",
    category: "profile",
    intents: ["formation", "education", "diplôme", "degree", "école", "school", "hackathon", "prix", "award"],
    keywords: ["emit", "université", "university", "master"],
    answer: {
      fr: `Formation : ${profile.education.map((e) => `${e.degree.fr} — ${e.school} (${e.period})`).join(" · ")}. Distinctions : ${profile.awards.map((a) => `${a.title.fr} (${a.year})`).join(" · ")}.`,
      en: `Education: ${profile.education.map((e) => `${e.degree.en} — ${e.school} (${e.period})`).join(" · ")}. Awards: ${profile.awards.map((a) => `${a.title.en} (${a.year})`).join(" · ")}.`,
    },
  },
]
