import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LanguageProviderWrapper } from "@/components/language-provider-wrapper"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tanteliniaina - Data Engineer & AI Engineer | Portfolio",
  description:
    "Data Engineer & AI Engineer specializing in ETL/ELT pipelines, LLMs, RAG systems, and Agentic AI. ~3 years building intelligent data infrastructure.",
  authors: [
    {
      name: "ANDRIATAFITASOA Tanteliniaina Tsilavo",
      url: "https://github.com",
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
    title: "Tanteliniaina - Data Engineer & AI Engineer",
    description:
      "Specializing in ETL/ELT pipelines, LLMs, RAG systems, and Agentic AI. Building intelligent data infrastructure.",
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
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProviderWrapper>{children}</LanguageProviderWrapper>
      </body>
    </html>
  )
}
