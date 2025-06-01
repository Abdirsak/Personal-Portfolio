import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      location: "Remote",
      period: "2022 - Present",
      description:
        "Developing custom web applications for clients using modern technologies like React, Next.js, and Node.js. Focus on creating scalable, user-friendly solutions.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
      type: "Freelance",
    },
    {
      title: "Web Developer",
      company: "Self-Learning & Projects",
      location: "Remote",
      period: "2021 - 2022",
      description:
        "Intensive self-study and hands-on project development. Built multiple personal projects to master full-stack development concepts and modern web technologies.",
      technologies: ["JavaScript", "React", "HTML/CSS", "Git"],
      type: "Learning",
    },
  ]

  const education = [
    {
      title: "Self-Taught Developer",
      institution: "Online Platforms & Documentation",
      period: "2021 - Present",
      description:
        "Continuous learning through online courses, documentation, and practical projects. Focus on modern web development technologies and best practices.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-[#0A0E2A]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FFA500]">
              My <span className="text-[#0A0E2A] dark:text-white">Experience</span>
            </h2>
            <p className="text-xl text-[#0A0E2A] dark:text-white">Professional journey and continuous learning</p>
          </div>

          <div className="space-y-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-[#FFA500]">
                <div className="w-2 h-8 bg-[#FFA500] rounded-full" />
                Work Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow bg-[#F9FAFB] dark:bg-[#101433] border border-[#0A0E2A] dark:border-white"
                  >
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-[#FFA500]">{exp.title}</CardTitle>
                          <p className="text-[#0A0E2A] dark:text-white font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end gap-2">
                          <Badge className="bg-[#FFA500] text-white dark:text-[#0A0E2A]">{exp.type}</Badge>
                          <div className="flex items-center gap-4 text-sm text-[#0A0E2A] dark:text-white">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-[#0A0E2A] dark:text-white mb-4 leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-[#0A0E2A] dark:border-white text-[#0A0E2A] dark:text-white"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-[#FFA500]">
                <div className="w-2 h-8 bg-[#FFA500] rounded-full" />
                Education & Learning
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow bg-[#F9FAFB] dark:bg-[#101433] border border-[#0A0E2A] dark:border-white"
                  >
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl text-[#FFA500]">{edu.title}</CardTitle>
                          <p className="text-[#0A0E2A] dark:text-white font-semibold">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-[#0A0E2A] dark:text-white">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-[#0A0E2A] dark:text-white leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
