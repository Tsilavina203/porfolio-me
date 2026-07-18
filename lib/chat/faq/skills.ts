import type { ChatFaqEntry } from "@/lib/chat/types"

export const skillsFaq: ChatFaqEntry[] = [
  {
    id: "skill-python",
    category: "skill",
    intents: ["python", "pourquoi python", "why python", "django", "flask"],
    keywords: ["programming", "backend", "script"],
    answer: {
      fr: "Python est ma langue principale depuis 4 ans : backend FastAPI, Data Engineering (ETL, Pandas), IA (PyTorch, LangChain) et automatisation. Utilisé en production chez Quark, Swiftask, Access Banque et SAYNA.",
      en: "Python is my main language for 4 years: FastAPI backend, Data Engineering (ETL, Pandas), AI (PyTorch, LangChain) and automation. Used in production at Quark, Swiftask, Access Banque and SAYNA.",
    },
  },
  {
    id: "skill-fastapi",
    category: "skill",
    intents: ["fastapi", "pourquoi fastapi", "why fastapi", "api python"],
    keywords: ["rest", "async", "openapi", "swagger"],
    answer: {
      fr: "FastAPI est mon framework backend principal : typage Pydantic, async, OpenAPI auto-généré et performances élevées. Je l'utilise pour APIs REST, microservices et backends IA en production.",
      en: "FastAPI is my main backend framework: Pydantic typing, async, auto-generated OpenAPI and high performance. I use it for REST APIs, microservices and AI backends in production.",
    },
  },
  {
    id: "skill-rag",
    category: "skill",
    intents: ["rag", "retrieval augmented", "vector search", "recherche vectorielle"],
    keywords: ["llm", "embedding", "qdrant", "langchain"],
    answer: {
      fr: "Je conçois des systèmes RAG en production : chunking, embeddings, recherche vectorielle (Qdrant) et orchestration LangChain/LangGraph. Exemples : Quark OIA, Swiftask, projet RAG documents juridiques.",
      en: "I build production RAG systems: chunking, embeddings, vector search (Qdrant) and LangChain/LangGraph orchestration. Examples: Quark OIA, Swiftask, legal documents RAG project.",
    },
  },
  {
    id: "skill-etl",
    category: "skill",
    intents: ["etl", "elt", "pipeline data", "data pipeline", "pipeline"],
    keywords: ["transformation", "ingestion", "extract"],
    answer: {
      fr: "ETL/ELT : collecte multisources, transformation (dbt, Spark, Pandas), chargement vers Data Lake/Warehouse. Expérience SAYNA (migration CRM), Swiftask (pipelines multisources), CHUA (Talend).",
      en: "ETL/ELT: multi-source ingestion, transformation (dbt, Spark, Pandas), loading to Data Lake/Warehouse. Experience at SAYNA (CRM migration), Swiftask (multi-source pipelines), CHUA (Talend).",
    },
  },
  {
    id: "skill-airflow",
    category: "skill",
    intents: ["airflow", "orchestration", "scheduler", "dag"],
    keywords: ["workflow", "apache"],
    answer: {
      fr: "Apache Airflow pour orchestrer pipelines Data : DAGs, scheduling, monitoring. Utilisé chez Swiftask pour industrialiser les flux Data & IA.",
      en: "Apache Airflow to orchestrate Data pipelines: DAGs, scheduling, monitoring. Used at Swiftask to industrialize Data & AI flows.",
    },
  },
  {
    id: "skill-docker",
    category: "skill",
    intents: ["docker", "container", "conteneur", "kubernetes", "k8s"],
    keywords: ["devops", "deployment", "compose"],
    answer: {
      fr: "Docker & Kubernetes pour containerisation et déploiement. CI/CD GitLab/GitHub Actions. Expérience Quark, Swiftask, Akata, Access Banque.",
      en: "Docker & Kubernetes for containerization and deployment. CI/CD GitLab/GitHub Actions. Experience at Quark, Swiftask, Akata, Access Banque.",
    },
  },
  {
    id: "skill-postgresql",
    category: "skill",
    intents: ["postgresql", "postgres", "sql", "base de données relationnelle"],
    keywords: ["mysql", "database", "bdd"],
    answer: {
      fr: "PostgreSQL est ma BDD relationnelle principale : modélisation, SQLAlchemy, Alembic, requêtes analytiques. Utilisé chez Quark, Swiftask, SAYNA, Access Banque, Akata.",
      en: "PostgreSQL is my main relational database: modeling, SQLAlchemy, Alembic, analytical queries. Used at Quark, Swiftask, SAYNA, Access Banque, Akata.",
    },
  },
  {
    id: "skill-qdrant",
    category: "skill",
    intents: ["qdrant", "vector database", "base vectorielle", "faiss", "chroma"],
    keywords: ["embedding", "similarity"],
    answer: {
      fr: "Qdrant pour stockage et recherche vectorielle dans mes projets RAG. Couplé à LangChain pour retrieval sémantique en production (Quark, Swiftask, RAG juridique).",
      en: "Qdrant for vector storage and search in my RAG projects. Combined with LangChain for production semantic retrieval (Quark, Swiftask, legal RAG).",
    },
  },
  {
    id: "skill-react",
    category: "skill",
    intents: ["react", "next.js", "nextjs", "frontend", "typescript"],
    keywords: ["javascript", "ui", "interface"],
    answer: {
      fr: "React & TypeScript pour interfaces modernes : Quark OIA, Swiftask, SAYNA, Akata. Next.js pour ce portfolio et applications full-stack.",
      en: "React & TypeScript for modern interfaces: Quark OIA, Swiftask, SAYNA, Akata. Next.js for this portfolio and full-stack applications.",
    },
  },
  {
    id: "skill-data-engineering",
    category: "skill",
    intents: ["data engineering", "data engineer", "ingénieur data", "data pipeline"],
    keywords: ["data lake", "warehouse", "governance"],
    answer: {
      fr: "Data Engineering : pipelines ETL/ELT, gouvernance, Data Lake, scraping, qualité des données. 4 ans d'expérience avec Airflow, dbt, Spark, Talend en contexte production.",
      en: "Data Engineering: ETL/ELT pipelines, governance, Data Lake, scraping, data quality. 4 years of experience with Airflow, dbt, Spark, Talend in production.",
    },
  },
  {
    id: "skill-ai-llm",
    category: "skill",
    intents: ["ia", "ai", "llm", "intelligence artificielle", "generative ai", "ia générative"],
    keywords: ["langchain", "langgraph", "agents", "gpt", "openai"],
    answer: {
      fr: "IA générative & LLMs : RAG, agents (LangGraph), prompt engineering, fine-tuning. Projets production chez Quark et Swiftask avec LLMs, NLP et orchestration multi-agents.",
      en: "Generative AI & LLMs: RAG, agents (LangGraph), prompt engineering, fine-tuning. Production projects at Quark and Swiftask with LLMs, NLP and multi-agent orchestration.",
    },
  },
  {
    id: "skill-devops",
    category: "skill",
    intents: ["devops", "ci/cd", "cicd", "gitlab", "github actions", "monitoring"],
    keywords: ["prometheus", "grafana", "nginx", "cloud"],
    answer: {
      fr: "DevOps : Docker, Kubernetes, CI/CD (GitLab, GitHub Actions), monitoring Prometheus/Grafana, déploiement GCP/AWS. Industrialisation des pipelines Data & IA chez Quark et Swiftask.",
      en: "DevOps: Docker, Kubernetes, CI/CD (GitLab, GitHub Actions), Prometheus/Grafana monitoring, GCP/AWS deployment. Industrialization of Data & AI pipelines at Quark and Swiftask.",
    },
  },
]
