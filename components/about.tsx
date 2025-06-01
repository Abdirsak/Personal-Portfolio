import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-[#F9FAFB] dark:bg-[#101433]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FFA500]">
              About <span className="text-[#0A0E2A] dark:text-white">Me</span>
            </h2>
            <p className="text-xl text-[#0A0E2A] dark:text-white">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#FFA500]">My Journey</h3>
              <p className="text-[#0A0E2A] dark:text-white mb-6 leading-relaxed">
                I'm a dedicated Full-Stack Developer with 2+ years of experience in building modern web applications. My
                expertise spans across frontend and backend technologies, with a particular focus on React ecosystem and
                Node.js.
              </p>
              <p className="text-[#0A0E2A] dark:text-white mb-6 leading-relaxed">
                I specialize in creating scalable, user-friendly applications using cutting-edge technologies like
                Next.js, TypeScript, and MongoDB. My goal is to bridge the gap between design and functionality,
                delivering exceptional user experiences.
              </p>
              <p className="text-[#0A0E2A] dark:text-white leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and staying
                up-to-date with the latest industry trends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-[#0A0E2A] border border-[#0A0E2A] dark:border-white">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-[#0A0E2A] dark:bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-white dark:text-[#0A0E2A]" />
                  </div>
                  <h4 className="font-semibold mb-2 text-[#FFA500]">Frontend</h4>
                  <p className="text-sm text-[#0A0E2A] dark:text-white">React, Next.js, TypeScript</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-[#0A0E2A] border border-[#0A0E2A] dark:border-white">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-[#FFA500] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Database className="h-8 w-8 text-[#0A0E2A]" />
                  </div>
                  <h4 className="font-semibold mb-2 text-[#FFA500]">Backend</h4>
                  <p className="text-sm text-[#0A0E2A] dark:text-white">Node.js, Next.js, Express.js, APIs</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-[#0A0E2A] border border-[#0A0E2A] dark:border-white">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-[#FFA500] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-[#0A0E2A]" />
                  </div>
                  <h4 className="font-semibold mb-2 text-[#FFA500]">Full-Stack</h4>
                  <p className="text-sm text-[#0A0E2A] dark:text-white">End-to-end solutions</p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-[#0A0E2A] border border-[#0A0E2A] dark:border-white">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-[#0A0E2A] dark:bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-white dark:text-[#0A0E2A]" />
                  </div>
                  <h4 className="font-semibold mb-2 text-[#FFA500]">Responsive</h4>
                  <p className="text-sm text-[#0A0E2A] dark:text-white">Mobile-first design</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
