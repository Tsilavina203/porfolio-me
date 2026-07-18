import { profile } from "@/lib/content/profile"
import type { ChatFaqEntry } from "@/lib/chat/types"

const contactLinks = [
  { label: { fr: "Email", en: "Email" }, href: `mailto:${profile.email}` },
  { label: { fr: "LinkedIn", en: "LinkedIn" }, href: profile.linkedin },
  { label: { fr: "Télécharger le CV", en: "Download CV" }, href: profile.cvPath },
]

export const hrFaq: ChatFaqEntry[] = [
  {
    id: "hr-why-data",
    category: "hr",
    intents: ["pourquoi data engineering", "why data engineering", "why data", "data engineer motivation"],
    keywords: ["passion", "career", "carrière"],
    answer: {
      fr: "Le Data Engineering me permet de construire les fondations sur lesquelles reposent l'analytique et l'IA : pipelines fiables, données propres, architectures scalables. C'est le pont entre la donnée brute et la valeur métier.",
      en: "Data Engineering lets me build the foundations for analytics and AI: reliable pipelines, clean data, scalable architectures. It's the bridge between raw data and business value.",
    },
  },
  {
    id: "hr-why-ai",
    category: "hr",
    intents: ["pourquoi ia", "why ai", "why llm", "why rag", "why artificial intelligence"],
    keywords: ["motivation", "interest"],
    answer: {
      fr: "L'IA générative transforme la façon dont les entreprises automatisent et décident. Je combine RAG, agents et LLMs avec des pipelines Data robustes pour des solutions IA fiables en production, pas des POC éphémères.",
      en: "Generative AI transforms how companies automate and decide. I combine RAG, agents and LLMs with robust Data pipelines for reliable production AI, not ephemeral POCs.",
    },
  },
  {
    id: "hr-why-python",
    category: "hr",
    intents: ["pourquoi python", "why python", "python choice"],
    keywords: ["language", "langage"],
    answer: {
      fr: "Python unifie mon stack : un seul langage pour backend, Data, ML et IA. Écosystème mature (FastAPI, Pandas, LangChain), productivité élevée et adoption massive en entreprise.",
      en: "Python unifies my stack: one language for backend, Data, ML and AI. Mature ecosystem (FastAPI, Pandas, LangChain), high productivity and widespread enterprise adoption.",
    },
  },
  {
    id: "hr-why-fastapi",
    category: "hr",
    intents: ["pourquoi fastapi", "why fastapi", "fastapi choice"],
    keywords: ["framework", "api"],
    answer: {
      fr: "FastAPI offre typage, validation Pydantic, async natif et documentation OpenAPI automatique. Idéal pour APIs performantes et backends IA que je déploie en production.",
      en: "FastAPI offers typing, Pydantic validation, native async and automatic OpenAPI docs. Ideal for performant APIs and AI backends I deploy in production.",
    },
  },
  {
    id: "hr-why-remote",
    category: "hr",
    intents: ["pourquoi remote", "why remote", "remote madagascar", "travail à distance"],
    keywords: ["telework", "télétravail", "distributed"],
    answer: {
      fr: "Basé à Madagascar, je travaille en remote depuis plusieurs années avec des équipes en France (Quark, Swiftask, SAYNA). Remote = focus, autonomie et livraison en production sur des projets internationaux.",
      en: "Based in Madagascar, I've worked remotely for years with teams in France (Quark, Swiftask, SAYNA). Remote means focus, autonomy and production delivery on international projects.",
    },
  },
  {
    id: "hr-international",
    category: "hr",
    intents: ["international", "équipe internationale", "international team", "france", "cross-border"],
    keywords: ["collaboration", "global"],
    answer: {
      fr: "J'ai collaboré avec des équipes en France (Quark — Liverdy-en-Brie, Swiftask — Nantes) et à Madagascar. Agile, communication claire en FR/EN et livraison orientée production.",
      en: "I've collaborated with teams in France (Quark — Liverdy-en-Brie, Swiftask — Nantes) and Madagascar. Agile, clear FR/EN communication and production-oriented delivery.",
    },
  },
  {
    id: "hr-strengths",
    category: "hr",
    intents: ["qualités", "strengths", "forces", "atouts", "soft skills"],
    keywords: ["qualities", "competencies"],
    answer: {
      fr: "Mes atouts : rigueur technique, vision architecture, autonomie en remote, capacité à livrer en production (Data + IA + backend), et apprentissage rapide de nouvelles technologies.",
      en: "My strengths: technical rigor, architecture vision, remote autonomy, ability to deliver in production (Data + AI + backend), and fast learning of new technologies.",
    },
  },
  {
    id: "hr-biggest-project",
    category: "hr",
    intents: ["plus grand projet", "biggest project", "best project", "meilleur projet", "flagship"],
    keywords: ["achievement", "réalisation majeure"],
    answer: {
      fr: "Quark OIA : plateforme d'automatisation IA (agents, RAG, LangGraph) réduisant les processus manuels de 75 %. Architecture full-stack FastAPI + React + Qdrant en production.",
      en: "Quark OIA: AI automation platform (agents, RAG, LangGraph) reducing manual processes by 75%. Full-stack FastAPI + React + Qdrant architecture in production.",
    },
    links: [{ label: { fr: "Quark OIA", en: "Quark OIA" }, href: "https://oia.quark-developpement.com/" }],
  },
  {
    id: "hr-learning",
    category: "hr",
    intents: ["apprendre", "learning", "new technology", "nouvelle technologie", "how do you learn"],
    keywords: ["study", "formation", "upskill"],
    answer: {
      fr: "J'apprends par la pratique : documentation officielle, POC rapide, projet réel. Hackathons EMIT (1ère place 2024). Je reste à jour via veille IA/Data et expérimentation sur des projets production.",
      en: "I learn by doing: official docs, quick POC, real projects. EMIT hackathons (1st place 2024). I stay current through AI/Data monitoring and experimentation on production projects.",
    },
  },
  {
    id: "hr-contact-hiring",
    category: "hr",
    intents: ["recruter", "hire", "hiring", "next step", "prochaine étape", "how to contact", "process"],
    keywords: ["interview", "entretien", "job offer"],
    answer: {
      fr: "Pour me recruter : envoyez un email ou contactez-moi sur LinkedIn avec le poste/mission. Je partage mon CV et planifie un échange. Réponse sous 24–48 h.",
      en: "To hire me: send an email or contact me on LinkedIn with the role/mission. I'll share my CV and schedule a call. Response within 24–48 hours.",
    },
    links: contactLinks,
  },
]
