export type Experience = {
  id: string
  role: { fr: string; en: string }
  company: string
  period: string
  location: string
  link?: string
  highlights: { fr: string[]; en: string[] }
  stack: string[]
}

export const experiences: Experience[] = [
  {
    id: "quark",
    role: { fr: "Data Engineer IA", en: "AI Data Engineer" },
    company: "Quark Développement",
    period: "Juin 2025 – Juin 2026",
    location: "Remote · Liverdy-en-Brie, France",
    link: "https://oia.quark-developpement.com/",
    highlights: {
      fr: [
        "Solutions IA générative (LLMs, RAG, agents) pour processus métier",
        "Pipelines Data : collecte, transformation, gouvernance",
        "APIs REST, workflows automatisés, CI/CD & DevOps",
      ],
      en: [
        "Generative AI (LLMs, RAG, agents) for business processes",
        "Data pipelines: collection, transformation, governance",
        "REST APIs, automated workflows, CI/CD & DevOps",
      ],
    },
    stack: ["Python", "FastAPI", "LangChain", "LLMs", "RAG", "PyTorch", "TensorFlow", "NLP", "React", "TypeScript", "n8n", "Graph API", "MySQL", "PostgreSQL", "Qdrant", "MinIO", "Docker", "GitLab CI/CD", "GCP", "Agile"],
  },
  {
    id: "swiftask",
    role: { fr: "Data Engineer IA", en: "AI Data Engineer" },
    company: "Swiftask Technology",
    period: "Juil. 2024 – Mai 2025",
    location: "Remote · Nantes, France",
    link: "https://www.swiftask.ai/fr-fr",
    highlights: {
      fr: [
        "Pipelines Data multisources et plateformes Data & IA",
        "IA générative : LLMs, RAG, agents, web scraping",
        "APIs, orchestration, industrialisation DevOps/CI/CD",
      ],
      en: [
        "Multi-source data pipelines and Data & AI platforms",
        "Generative AI: LLMs, RAG, agents, web scraping",
        "APIs, orchestration, DevOps/CI/CD industrialization",
      ],
    },
    stack: ["Python", "SQL", "FastAPI", "LangChain", "LangGraph", "LLMs", "RAG", "Selenium", "NLP", "MySQL", "Qdrant", "dbt", "Spark", "Airflow", "AWS", "GraphQL", "Docker", "GitHub", "Agile"],
  },
  {
    id: "akata",
    role: { fr: "Data Scientist / Fullstack Developer", en: "Data Scientist / Fullstack Developer" },
    company: "AKATA GOAVANA",
    period: "Oct. 2023 – Juin 2024",
    location: "Fianarantsoa, Madagascar",
    link: "https://www.akata-goavana.com/fr",
    highlights: {
      fr: [
        "Microservices & APIs REST pour traitement de données",
        "Web scraping pour analyse et marketing",
        "Tests, sécurisation, déploiement CI/CD DevOps",
      ],
      en: [
        "Microservices & REST APIs for data processing",
        "Web scraping for analytics and marketing",
        "Testing, security, DevOps CI/CD deployment",
      ],
    },
    stack: ["Python", "Flask", "PHP", "Laravel", "React", "Express.js", "TypeScript", "PostgreSQL", "Firebase", "Selenium", "BeautifulSoup", "Docker", "Kubernetes", "GitLab CI/CD", "Cypress", "Jest"],
  },
  {
    id: "accesbanque",
    role: { fr: "Ingénieur Data / Backend Developer", en: "Data / Backend Engineer" },
    company: "Access Banque",
    period: "Mai 2023 – Oct. 2023",
    location: "Fianarantsoa, Madagascar",
    link: "https://www.accesbanque.mg/",
    highlights: {
      fr: [
        "API REST bancaire : transactions, comptes, fraude",
        "Sécurité JWT/RBAC, traitements temps réel",
        "Monitoring Prometheus/Grafana, tests Pytest",
      ],
      en: [
        "Banking REST API: transactions, accounts, fraud",
        "JWT/RBAC security, real-time processing",
        "Prometheus/Grafana monitoring, Pytest",
      ],
    },
    stack: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "PostgreSQL", "Redis", "Kafka", "AWS Kinesis", "Alembic", "Pandas", "PyArrow", "JWT", "Docker", "GitHub Actions", "Prometheus", "Grafana", "Pytest"],
  },
  {
    id: "sayna",
    role: { fr: "Développeur Full Stack (Freelance)", en: "Full Stack Developer (Freelance)" },
    company: "SAYNA",
    period: "Jan. 2022 – Juin 2023",
    location: "Remote · Madagascar",
    link: "https://sayna.io/",
    highlights: {
      fr: [
        "Migration multi-CRM vers Zendesk",
        "Pipelines ETL & connecteurs sécurisés",
        "Architecture scalable (Celery, RabbitMQ, MinIO)",
      ],
      en: [
        "Multi-CRM to Zendesk migration",
        "ETL pipelines & secure connectors",
        "Scalable architecture (Celery, RabbitMQ, MinIO)",
      ],
    },
    stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "Celery", "RabbitMQ", "MinIO", "Zendesk ZAF", "SQLAlchemy", "OAuth 2.0", "JWT", "Docker", "Pytest", "Vitest"],
  },
  {
    id: "chua",
    role: { fr: "Data Analyst", en: "Data Analyst" },
    company: "CHUA",
    period: "Mai 2021 – Jan. 2022",
    location: "Fianarantsoa, Madagascar",
    highlights: {
      fr: [
        "Pipelines ETL Talend (Excel, MySQL, PostgreSQL)",
        "Power BI, KPIs, reporting automatisé",
        "Scripts Java, VBA, Shell & Python (Pandas)",
      ],
      en: [
        "Talend ETL pipelines (Excel, MySQL, PostgreSQL)",
        "Power BI, KPIs, automated reporting",
        "Java, VBA, Shell & Python (Pandas) scripts",
      ],
    },
    stack: ["Talend", "Power BI", "Python", "Pandas", "NumPy", "MySQL", "PostgreSQL", "Excel", "Java", "VBA"],
  },
]

export const featuredExperienceIndices = [0, 1, 2] as const

export const earlierExperienceIndices = [3, 4, 5] as const

export function toDisplayExperience(exp: Experience, lang: "fr" | "en") {
  return {
    role: exp.role[lang],
    company: exp.company,
    period: exp.period,
    location: exp.location,
    link: exp.link,
    description: exp.highlights[lang][0] ?? "",
    achievements: exp.highlights[lang],
    stack: exp.stack,
  }
}
