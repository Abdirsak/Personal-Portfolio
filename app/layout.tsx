import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdirizak Abdullahi Hassan - Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, and Node.js. Creating beautiful, functional web applications with modern technologies.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Web Developer"],
  authors: [{ name: "Abdirizak Abdullahi Hassan" }],
  creator: "Abdirizak Abdullahi Hassan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdirizak-portfolio.vercel.app",
    title: "Abdirizak Abdullahi Hassan - Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, and Node.js",
    siteName: "Abdirizak Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdirizak Abdullahi Hassan - Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, and Node.js",
    creator: "@Abdiriz84575940",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
