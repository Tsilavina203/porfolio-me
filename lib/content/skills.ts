import type { LucideIcon } from "lucide-react"
import { Sparkles, Code, Brain, Cloud, Database, Zap, BarChart3, Globe } from "lucide-react"

type Lang = "en" | "fr"

export type SkillCategory = {
  id: string
  category: string
  icon: LucideIcon
  color: "primary" | "accent"
  description: { en: string; fr: string }
  skills: string[]
}

const skillCategoriesData: SkillCategory[] = [
  {
    id: "data-engineering",
    category: "Data Engineering",
    icon: Database,
    color: "primary",
    description: {
      en: "ETL/ELT, governance, Data Lake, scraping",
      fr: "ETL/ELT, gouvernance, Data Lake, scraping",
    },
    skills: ["ETL/ELT", "Airflow", "dbt", "Spark", "Talend", "Parquet", "Delta Lake", "Selenium", "BeautifulSoup", "GraphQL", "Data Lake"],
  },
  {
    id: "ai-ml",
    category: "AI & Machine Learning",
    icon: Brain,
    color: "accent",
    description: {
      en: "LLMs, RAG, agents, MLOps",
      fr: "LLMs, RAG, agents, MLOps",
    },
    skills: ["LLMs", "RAG", "LangChain", "LangGraph", "Agentic AI", "MCP", "NLP", "PyTorch", "TensorFlow", "Fine-Tuning", "Computer Vision", "MLOps"],
  },
  {
    id: "programming",
    category: "Programming",
    icon: Code,
    color: "primary",
    description: {
      en: "Python, JS/TS, Java, Go, PHP",
      fr: "Python, JS/TS, Java, Go, PHP",
    },
    skills: ["Python", "FastAPI", "Django", "Flask", "React", "Next.js", "TypeScript", "Java", "Spring Boot", "Go", "Laravel", "SQL"],
  },
  {
    id: "backend-devops",
    category: "Backend & DevOps",
    icon: Zap,
    color: "accent",
    description: {
      en: "APIs, Docker, CI/CD, cloud",
      fr: "APIs, Docker, CI/CD, cloud",
    },
    skills: ["FastAPI", "Docker", "Kubernetes", "CI/CD", "GitLab", "GitHub", "GCP", "AWS", "Azure DevOps", "Nginx", "Prometheus", "Grafana"],
  },
  {
    id: "databases",
    category: "Databases",
    icon: Sparkles,
    color: "primary",
    description: {
      en: "Relational, vector, cache, object storage",
      fr: "Relationnel, vectoriel, cache, stockage objet",
    },
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Qdrant", "PGVector", "ChromaDB", "FAISS", "MinIO", "SQL Server", "Spark", "Alembic"],
  },
  {
    id: "bi-analytics",
    category: "BI & Analytics",
    icon: BarChart3,
    color: "accent",
    description: {
      en: "Power BI, KPIs, visualization",
      fr: "Power BI, KPIs, visualisation",
    },
    skills: ["Power BI", "Pandas", "NumPy", "Excel", "KPIs", "Reporting", "Data Viz", "Jupyter", "Colab", "Talend", "Data Cleaning", "Normalization"],
  },
  {
    id: "cloud",
    category: "Cloud & AI Engines",
    icon: Cloud,
    color: "primary",
    description: {
      en: "AI engines and orchestration",
      fr: "Moteurs IA et orchestration",
    },
    skills: ["OpenAI", "Mistral AI", "Gemini", "Hugging Face", "Ollama", "vLLM", "n8n", "Runway", "GCP", "AWS", "Runware", "Groq"],
  },
  {
    id: "web-frontend",
    category: "Web & Tools",
    icon: Globe,
    color: "accent",
    description: {
      en: "Frontend, CRM, integrations",
      fr: "Frontend, CRM, intégrations",
    },
    skills: ["React", "Next.js", "Node.js", "Express", "Postman", "Swagger", "Zendesk", "Salesforce", "HubSpot", "Jira", "Cypress", "Vitest"],
  },
]

export function getSkillCategories(lang: Lang) {
  return skillCategoriesData.map((cat) => ({
    ...cat,
    description: cat.description[lang],
  }))
}
