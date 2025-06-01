"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0E2A]/90 dark:bg-white/90 backdrop-blur-md border-b border-[#0A0E2A] dark:border-white"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#FFA500]">Abdirizak</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["about", "skills", "projects", "experience", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  isScrolled ? "text-white dark:text-[#0A0E2A]" : "text-[#0A0E2A] dark:text-white"
                } hover:text-[#FFA500] transition-colors capitalize font-medium`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {mounted && (
              <div onClick={toggleTheme} className="cursor-pointer">
                {theme === "dark" ? (
                  <Sun
                    className={`h-5 w-5 ${isScrolled ? "text-[#0A0E2A]" : "text-white"} hover:text-[#FFA500] transition-colors`}
                  />
                ) : (
                  <Moon
                    className={`h-5 w-5 ${isScrolled ? "text-white" : "text-[#0A0E2A]"} hover:text-[#FFA500] transition-colors`}
                  />
                )}
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden cursor-pointer p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X
                  className={`h-5 w-5 ${isScrolled ? "text-white dark:text-[#0A0E2A]" : "text-[#0A0E2A] dark:text-white"}`}
                />
              ) : (
                <Menu
                  className={`h-5 w-5 ${isScrolled ? "text-white dark:text-[#0A0E2A]" : "text-[#0A0E2A] dark:text-white"}`}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#0A0E2A] dark:border-white">
            <div className="flex flex-col space-y-4 pt-4">
              {["about", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left ${
                    isScrolled ? "text-white dark:text-[#0A0E2A]" : "text-[#0A0E2A] dark:text-white"
                  } hover:text-[#FFA500] transition-colors capitalize font-medium`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
