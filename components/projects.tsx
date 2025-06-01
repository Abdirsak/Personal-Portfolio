import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Plus } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
      status: "Coming Soon",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      status: "In Development",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with dark/light mode support.",
      technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
      status: "Completed",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-[#F9FAFB] dark:bg-[#101433]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FFA500]">
              My <span className="text-[#0A0E2A] dark:text-white">Projects</span>
            </h2>
            <p className="text-xl text-[#0A0E2A] dark:text-white">Showcasing my latest work and upcoming projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow group bg-white dark:bg-[#0A0E2A] border border-[#0A0E2A] dark:border-white"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={`${
                        project.status === "Completed"
                          ? "bg-[#FFA500] text-white dark:text-[#0A0E2A]"
                          : "bg-[#0A0E2A] dark:bg-white text-white dark:text-[#0A0E2A]"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-[#FFA500]">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-[#0A0E2A] dark:text-white mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-[#0A0E2A] dark:border-white text-[#0A0E2A] dark:text-white"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-[#0A0E2A] dark:border-white bg-[#0A0E2A] dark:bg-white text-white dark:text-[#0A0E2A] hover:bg-[#1A1E3F] dark:hover:bg-gray-100"
                      disabled={project.status !== "Completed"}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-[#FFA500] hover:bg-[#FF8C00] text-white dark:text-[#0A0E2A]"
                      disabled={project.status !== "Completed"}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-md mx-auto bg-white dark:bg-[#0A0E2A] border border-[#0A0E2A] dark:border-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FFA500] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-8 w-8 text-[#0A0E2A]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#FFA500]">More Projects Coming Soon</h3>
                <p className="text-[#0A0E2A] dark:text-white text-sm">
                  I'm constantly working on new projects. Check back soon for updates!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
