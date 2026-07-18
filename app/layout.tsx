import type React from "react"
import type { Metadata } from "next"
import { LanguageProviderWrapper } from "@/components/language-provider-wrapper"
import { VisitTracker } from "@/components/visit-tracker"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tanteliniaina Andriatafitasoa — Data Engineer IA & Fullstack Developer",
  description:
    "Data Engineer IA confirmé (4 ans). Pipelines Data, RAG, LLMs, agents IA et backends scalables. FastAPI, Python, ETL/ELT, déploiement production.",
  authors: [
    {
      name: "ANDRIATAFITASOA Tanteliniaina Jean Claude",
      url: "https://www.linkedin.com/in/andriatafitasoa-5484742a8/",
    },
  ],
  keywords: [
    "Data Engineer",
    "AI Engineer",
    "LLM",
    "RAG",
    "ETL",
    "FastAPI",
    "Python",
    "Machine Learning",
    "Generative AI",
  ],
  openGraph: {
    title: "Tanteliniaina — Data Engineer IA & Fullstack Developer",
    description:
      "4 ans d'expérience en pipelines Data, RAG, LLMs et backends scalables. Open to remote opportunities.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <LanguageProviderWrapper>{children}</LanguageProviderWrapper>
        <VisitTracker />
      </body>
    </html>
  )
}
