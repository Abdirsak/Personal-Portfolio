import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Next.js", "Express.js", "RESTful APIs", "Authentication", "Server-side Rendering"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "Mongoose", "Database Design", "Data Modeling"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "npm/yarn", "Vercel", "Deployment", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#0A0E2A]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FFA500]">
              My <span className="text-[#0A0E2A] dark:text-white">Skills</span>
            </h2>
            <p className="text-xl text-[#0A0E2A] dark:text-white">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-[#F9FAFB] dark:bg-[#101433] border border-[#0A0E2A] dark:border-white"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#FFA500]">
                    <div className="w-3 h-3 rounded-full bg-[#FFA500]" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-[#0A0E2A] dark:bg-white text-white dark:text-[#0A0E2A]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-[#F9FAFB] dark:bg-[#101433] border border-[#0A0E2A] dark:border-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">Experience Level</h3>
                <p className="text-[#0A0E2A] dark:text-white mb-4">
                  <span className="text-2xl font-bold text-[#FFA500]">2+ Years</span> of hands-on experience
                </p>
                <p className="text-[#0A0E2A] dark:text-white">
                  Mid-level developer with expertise in both frontend and backend technologies, capable of building
                  complete web applications from concept to deployment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
