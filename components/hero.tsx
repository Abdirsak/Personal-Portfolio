"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter, Facebook, Download } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Abdirizak_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-white dark:bg-[#0A0E2A]">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[#FFA500]">Abdirizak</span>
              <br />
              <span className="text-[#0A0E2A] dark:text-white">Full-Stack Developer</span>
            </h1>
          </div>

          <div className="animate-fade-in-up delay-200">
            <p className="text-xl md:text-2xl text-[#0A0E2A] dark:text-white mb-8">
              Specializing in <span className="text-[#FFA500] font-semibold">React</span>,{" "}
              <span className="text-[#FFA500] font-semibold">Next.js</span>, and{" "}
              <span className="text-[#FFA500] font-semibold">Node.js</span>
            </p>
          </div>

          <div className="animate-fade-in-up delay-400">
            <p className="text-lg text-[#0A0E2A] dark:text-white mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating beautiful, functional web applications with modern technologies. 2+ years of
              experience building scalable solutions with TypeScript, MongoDB, and cutting-edge frameworks.
            </p>
          </div>

          <div className="animate-fade-in-up delay-600 flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group bg-[#0A0E2A] dark:bg-white hover:bg-[#1A1E3F] dark:hover:bg-gray-100 text-white dark:text-[#0A0E2A]"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              onClick={downloadCV}
              className="bg-[#FFA500] hover:bg-[#FF8C00] text-white dark:text-[#0A0E2A]"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="animate-fade-in-up delay-800 flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0E2A] dark:text-white hover:text-[#FFA500] transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdirizak-abdullahi-620042269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0E2A] dark:text-white hover:text-[#FFA500] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/Abdiriz84575940"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0E2A] dark:text-white hover:text-[#FFA500] transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/cabdirisaq.cabdalle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0E2A] dark:text-white hover:text-[#FFA500] transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
