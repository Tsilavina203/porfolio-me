export type Project = {
  id: string
  title: string
  description: { fr: string; en: string }
  problem: { fr: string; en: string }
  solution: { fr: string; en: string }
  impact: { fr: string; en: string }
  stack: string[]
  link?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "quark-oia",
    title: "Quark — OIA Platform",
    description: {
      fr: "Plateforme d'automatisation IA pour l'optimisation des processus métier.",
      en: "AI automation platform for business process optimization.",
    },
    problem: {
      fr: "Processus métier manuels et peu coordonnés.",
      en: "Manual and poorly coordinated business processes.",
    },
    solution: {
      fr: "Architecture OIA avec agents IA, RAG et workflows automatisés.",
      en: "OIA architecture with AI agents, RAG and automated workflows.",
    },
    impact: {
      fr: "−75 % de processus manuels",
      en: "75% reduction in manual processes",
    },
    stack: ["LangGraph", "LLMs", "FastAPI", "React", "Qdrant", "n8n"],
    link: "https://quark-developpement.com/",
    featured: true,
  },
  {
    id: "swiftask",
    title: "Swiftask Technology",
    description: {
      fr: "Plateforme d'automatisation de tâches IA pour entreprises.",
      en: "AI task automation platform for enterprises.",
    },
    problem: {
      fr: "Gestion manuelle des tâches consommant du temps.",
      en: "Manual task management consuming significant time.",
    },
    solution: {
      fr: "Système IA avec routage intelligent et exécution automatisée.",
      en: "AI system with intelligent routing and automated execution.",
    },
    impact: {
      fr: "Workflows optimisés, productivité accrue",
      en: "Optimized workflows, increased productivity",
    },
    stack: ["LLMs", "FastAPI", "Python", "React", "LangChain"],
    link: "https://www.swiftask.ai/fr-fr",
    featured: true,
  },
  {
    id: "sayna",
    title: "SAYNA — Migration CRM",
    description: {
      fr: "Migration multi-CRM vers Zendesk avec pipelines ETL.",
      en: "Multi-CRM to Zendesk migration with ETL pipelines.",
    },
    problem: {
      fr: "Migration complexe de données CRM vers un support unifié.",
      en: "Complex CRM data migration to unified support.",
    },
    solution: {
      fr: "Microservices, connecteurs sécurisés et traitements asynchrones.",
      en: "Microservices, secure connectors and async processing.",
    },
    impact: {
      fr: "Migration fiable de tickets, users et pièces jointes",
      en: "Reliable migration of tickets, users and attachments",
    },
    stack: ["FastAPI", "React", "PostgreSQL", "Celery", "Redis", "MinIO"],
    link: "https://sayna.io/",
    featured: true,
  },
  {
    id: "accesbanque",
    title: "Access Banque — API Bancaire",
    description: {
      fr: "API REST pour transactions, comptes et détection de fraude.",
      en: "REST API for transactions, accounts and fraud detection.",
    },
    problem: {
      fr: "Besoin d'une API sécurisée pour opérations bancaires temps réel.",
      en: "Need for a secure API for real-time banking operations.",
    },
    solution: {
      fr: "Backend FastAPI avec Kafka, Redis et monitoring complet.",
      en: "FastAPI backend with Kafka, Redis and full monitoring.",
    },
    impact: {
      fr: "Traitements temps réel et exports analytiques fiables",
      en: "Real-time processing and reliable analytics exports",
    },
    stack: ["FastAPI", "PostgreSQL", "Redis", "Kafka", "Prometheus", "Grafana"],
    link: "https://www.accesbanque.mg/",
    featured: true,
  },
  {
    id: "akata",
    title: "Akata Goavana",
    description: {
      fr: "Plateforme logistique avec suivi en temps réel.",
      en: "Logistics platform with real-time tracking.",
    },
    problem: {
      fr: "Manque de visibilité sur la chaîne logistique.",
      en: "Lack of supply chain visibility.",
    },
    solution: {
      fr: "Full-stack avec tracking, analytics et automatisation.",
      en: "Full-stack with tracking, analytics and automation.",
    },
    impact: {
      fr: "Visibilité accrue, coûts opérationnels réduits",
      en: "Increased visibility, reduced operational costs",
    },
    stack: ["React", "FastAPI", "Python", "PostgreSQL", "Docker"],
    link: "https://www.akata-goavana.com/fr",
    featured: true,
  },
  {
    id: "rag-legal",
    title: "RAG — Documents Juridiques",
    description: {
      fr: "Système RAG pour analyse de documents juridiques en français.",
      en: "RAG system for French legal document analysis.",
    },
    problem: {
      fr: "Revue manuelle longue, peu de support multilingue.",
      en: "Long manual review, limited multilingual support.",
    },
    solution: {
      fr: "Pipeline RAG avec LangChain, Qdrant et LLMs.",
      en: "RAG pipeline with LangChain, Qdrant and LLMs.",
    },
    impact: {
      fr: "Temps de revue réduit, QA fiable en français",
      en: "Reduced review time, reliable French QA",
    },
    stack: ["LangChain", "Qdrant", "FastAPI", "LLMs", "Python"],
    featured: true,
  },
]
