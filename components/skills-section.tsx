"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Sparkles, Code, Brain, Cloud, Database, Zap, BarChart3, Globe } from "lucide-react"
import { useSectionNumber } from "@/hooks/use-section-number"

export function SkillsSection() {
  const { t } = useLanguage()
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const { sectionRef, isVisible, NumberOverlay } = useSectionNumber(2)

  const skillCategories = [
    {
      id: "data-engineering",
      category: "Data Engineering",
      icon: Database,
      color: "primary",
      description: "Pipelines ETL/ELT, nettoyage de données, entrepôt de données et intégration",
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
      id: "ai-ml",
      category: "AI & Machine Learning",
      icon: Brain,
      color: "accent",
      description: "Systèmes RAG, LLMs multimodaux, agents et applications d'IA générative",
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
      id: "programming",
      category: "Programming Languages",
      icon: Code,
      color: "primary",
      description: "Maîtrise de plusieurs langages pour le développement backend et data",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "Go", "SQL", "R", "Kotlin"],
    },
    {
      id: "backend-devops",
      category: "Backend & DevOps",
      icon: Zap,
      color: "accent",
      description: "APIs sécurisées, Docker, CI/CD et infrastructure scalable",
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
      id: "ai-frameworks",
      category: "AI Frameworks & Tools",
      icon: Sparkles,
      color: "primary",
      description: "Frameworks et outils pour le développement d'applications IA",
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
      id: "bi-analytics",
      category: "BI & Analytics",
      icon: BarChart3,
      color: "accent",
      description: "Tableaux de bord, KPIs, visualisation et analyse de données",
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
      id: "cloud",
      category: "Cloud & Infrastructure",
      icon: Cloud,
      color: "primary",
      description: "Infrastructure cloud, serverless et microservices",
      skills: ["AWS EC2", "AWS Lambda", "AWS S3", "Google Cloud", "Azure", "Serverless", "API Design", "Microservices"],
    },
    {
      id: "web-frontend",
      category: "Web & Frontend",
      icon: Globe,
      color: "accent",
      description: "Développement frontend moderne et APIs REST/GraphQL",
      skills: ["React", "Next.js", "Tailwind CSS", "REST APIs", "GraphQL", "HTML/CSS", "Node.js"],
    },
  ]

  const getColorClasses = (color: string) => {
    if (color === "primary") {
      return {
        border: "border-primary/30 hover:border-primary/60",
        bg: "bg-primary/10",
        text: "text-primary",
        icon: "text-primary",
        skillBg: "bg-primary/20 hover:bg-primary/30",
        skillBorder: "border-primary/30 hover:border-primary/50",
      }
    }
    return {
      border: "border-accent/30 hover:border-accent/60",
      bg: "bg-accent/10",
      text: "text-accent",
      icon: "text-accent",
      skillBg: "bg-accent/20 hover:bg-accent/30",
      skillBorder: "border-accent/30 hover:border-accent/50",
    }
  }

  return (
    <>
      <NumberOverlay />
      <section 
        ref={sectionRef}
        id="skills" 
        className={`min-h-screen py-20 sm:py-32 px-4 sm:px-6 relative transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
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

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 px-4 sm:px-6 md:pl-12 lg:pl-20">
        {/* Section number */}
        <div className="section-number text-foreground">
          2
        </div>

        {/* Section title with slogan */}
        <div className="scroll-trigger relative z-10">
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
            <span className="block gradient-animated stagger-reveal" style={{ animationDelay: '0.1s' }}>{t.skills.title}</span>
            <span className="block text-muted-foreground/60 text-xl xs:text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:mt-4 font-light stagger-reveal" style={{ animationDelay: '0.3s' }}>
               {t.skills.subtitle}
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground/70 max-w-2xl mt-4 sm:mt-6 md:mt-8 leading-relaxed font-light scroll-trigger">
            {t.skills.description}
          </p>
        </div>

        {/* Skills grid - Compact 2x4 design */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 scroll-trigger">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const colors = getColorClasses(category.color)
            const isHovered = hoveredCategory === category.id

            return (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`
                  group relative p-3 sm:p-4 md:p-4 glass border ${colors.border} 
                  transition-all duration-500 overflow-hidden
                  ${isHovered ? 'scale-[1.05] shadow-xl border-opacity-100' : ''}
                  hover:border-opacity-80
                `}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  clipPath: isHovered ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
              >
                {/* Animated gradient overlay */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  bg-gradient-to-br ${colors.bg} from-transparent via-transparent to-transparent
                `}></div>

                {/* Diagonal accent line */}
                <div className={`
                  absolute top-0 left-0 w-full h-0.5 ${colors.bg}
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500
                `}></div>

                {/* Content - Compact */}
                <div className="relative z-10 space-y-1.5 sm:space-y-2 md:space-y-2.5">
                  {/* Header - Minimalist */}
                  <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                    <div className={`
                      p-0.5 xs:p-1 sm:p-1.5 rounded ${colors.bg} border ${colors.border}
                      transition-all duration-300 group-hover:rotate-12 group-hover:scale-110
                    `}>
                      <Icon className={`w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 ${colors.icon}`} />
                    </div>
                    <h3 className={`text-[10px] xs:text-xs sm:text-sm md:text-base font-light ${colors.text} leading-tight truncate`}>
                      {category.category.split(' ')[0]}
                      {category.category.includes('&') && (
                        <span className="block text-[9px] xs:text-[10px] sm:text-xs opacity-70">{category.category.split('&')[1]?.trim()}</span>
                      )}
                    </h3>
                  </div>

                  {/* Skills - Compact tags in grid */}
                  <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 gap-0.5 xs:gap-1 pt-0.5 xs:pt-1">
                    {category.skills.slice(0, 6).map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`
                          px-0.5 xs:px-1 sm:px-1.5 py-0.5 ${colors.skillBg} ${colors.text}
                          text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] rounded font-medium border ${colors.skillBorder}
                          transition-all duration-300 cursor-default truncate
                          group-hover:scale-105 hover:scale-110
                        `}
                        title={skill}
                      >
                        {skill.length > 6 ? skill.substring(0, 5) + '...' : skill}
                      </span>
                    ))}
                    {category.skills.length > 6 && (
                      <span className={`
                        px-0.5 xs:px-1 sm:px-1.5 py-0.5 ${colors.skillBg} ${colors.text}
                        text-[7px] xs:text-[8px] sm:text-[9px] md:text-[10px] rounded font-medium border ${colors.skillBorder}
                        text-center
                      `}>
                        +{category.skills.length - 6}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`
                  absolute bottom-0 right-0 w-12 h-12 ${colors.bg} rounded-tl-full
                  opacity-0 group-hover:opacity-10 transition-opacity duration-500
                  blur-2xl
                `}></div>

                {/* Corner number indicator */}
                <div className={`
                  absolute top-1.5 right-1.5 w-4 h-4 rounded-full ${colors.bg} border ${colors.border}
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  flex items-center justify-center
                `}>
                  <span className={`text-[7px] ${colors.text} font-bold`}>
                    {category.skills.length}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats footer */}
        <div className="scroll-trigger grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border/20">
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light large-number text-foreground count-up">
              150+
            </div>
            <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase px-1">
              Compétences
            </p>
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light large-number text-primary count-up" style={{ animationDelay: '0.1s' }}>
              3
            </div>
            <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase px-1">
              Années d'Expérience
            </p>
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light large-number text-accent count-up" style={{ animationDelay: '0.2s' }}>
              10+
            </div>
            <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase px-1">
              Projets Livrés
            </p>
          </div>
          <div className="text-center space-y-1 sm:space-y-2">
            <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-light large-number text-foreground count-up" style={{ animationDelay: '0.3s' }}>
              30+
            </div>
            <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground/60 font-light tracking-wider uppercase px-1">
              Technologies
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
