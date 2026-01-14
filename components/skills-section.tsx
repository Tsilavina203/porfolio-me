"use client"

import { useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SkillsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const { t } = useLanguage()

  const skillCategories = [
    {
      category: "Data Engineering",
      skills: [
        "ETL/ELT",
        "Data Pipelines",
        "Data Cleaning",
        "Warehousing",
        "Data Mining",
        "Structured Data",
        "Unstructured Data",
        "Normalization",
        "Spark",
        "Kafka",
        "Airflow",
        "dbt",
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "LLMs",
        "GenAI",
        "RAG Systems",
        "Agentic AI",
        "NLP",
        "Deep Learning",
        "Model Fine-Tuning",
        "Computer Vision",
        "Prompt Engineering",
        "Vector Databases",
        "Semantic Search",
        "Knowledge Graphs",
      ],
    },
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "Go", "SQL", "R", "Kotlin"],
    },
    {
      category: "Backend & DevOps",
      skills: [
        "FastAPI",
        "Docker",
        "CI/CD",
        "AWS",
        "GitHub",
        "GitLab",
        "MinIO",
        "Shell Scripts",
        "Kubernetes",
        "Jenkins",
        "Terraform",
        "Linux",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      category: "AI Frameworks & Tools",
      skills: [
        "LangChain",
        "LangGraph",
        "TensorFlow",
        "PyTorch",
        "Pandas",
        "NumPy",
        "Qdrant",
        "n8n",
        "Scikit-learn",
        "OpenAI API",
        "Anthropic Claude",
        "Hugging Face",
        "Ollama",
      ],
    },
    {
      category: "BI & Analytics",
      skills: [
        "Power BI",
        "Reporting",
        "KPIs",
        "Dashboards",
        "Data Analysis",
        "Decision Intelligence",
        "Visualization",
        "Tableau",
        "Grafana",
        "Metabase",
        "SQL Analytics",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS EC2", "AWS Lambda", "AWS S3", "Google Cloud", "Azure", "Serverless", "API Design", "Microservices"],
    },
    {
      category: "Web & Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "REST APIs", "GraphQL", "HTML/CSS", "Node.js"],
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    // Auto-scroll every 2 seconds
    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const scrollAmount = 400
        const maxScroll = container.scrollWidth - container.clientWidth
        
        if (container.scrollLeft >= maxScroll - 10) {
          // Reset to beginning when reaching the end
          container.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
      }
    }, 2000)

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [])

  return (
    <section id="skills" className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 relative flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background z-0"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16 sm:space-y-20 md:space-y-24 pl-12 md:pl-20">
        {/* Section number */}
        <div className="section-number text-foreground">
          4
        </div>

        <div className="scroll-trigger relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
            <span className="block gradient-animated stagger-reveal" style={{ animationDelay: '0.1s' }}>Expertise</span>
            <span className="block text-muted-foreground/60 text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-4 font-light stagger-reveal" style={{ animationDelay: '0.3s' }}>Technique</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground/70 max-w-2xl mt-6 sm:mt-8 leading-relaxed font-light scroll-trigger">
            {t.skills.description}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 glass border border-border/50 rounded-full p-1.5 sm:p-2 hover:border-primary/50 transition-all duration-300 shadow-lg hover-lift hover-glow hidden sm:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 glass border border-border/50 rounded-full p-1.5 sm:p-2 hover:border-primary/50 transition-all duration-300 shadow-lg hover-lift hover-glow hidden sm:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {skillCategories.map((category) => (
              <div
                key={category.category}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] p-4 sm:p-5 md:p-6 glass rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-500 card-hover"
              >
                <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 bg-primary/20 text-primary text-[10px] xs:text-xs sm:text-sm rounded-full font-medium border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
