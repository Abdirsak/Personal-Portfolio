import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, Linkedin, Twitter, Facebook, Send } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abdirizakabdullahi26@gmail.com",
      href: "mailto:abdirizakabdullahi26@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+252 616089837",
      href: "tel:+252616089837",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Abdirizak Abdullahi",
      href: "https://www.linkedin.com/in/abdirizak-abdullahi-620042269/",
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      value: "@Abdiriz84575940",
      href: "https://x.com/Abdiriz84575940",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-[#F9FAFB] dark:bg-[#101433]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FFA500]">
              Get In <span className="text-[#0A0E2A] dark:text-white">Touch</span>
            </h2>
            <p className="text-xl text-[#0A0E2A] dark:text-white">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-[#FFA500]">Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl hover:shadow-lg transition-shadow group bg-white dark:bg-[#0A0E2A] border border-[#0A0E2A] dark:border-white"
                  >
                    <div className="w-12 h-12 bg-[#FFA500] rounded-xl flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-[#0A0E2A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#FFA500]">{info.label}</p>
                      <p className="text-[#0A0E2A] dark:text-white">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/cabdirisaq.cabdalle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#FFA500] rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <Facebook className="h-6 w-6 text-[#0A0E2A]" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white dark:bg-[#0A0E2A] border border-[#0A0E2A] dark:border-white">
              <CardHeader>
                <CardTitle className="text-[#FFA500]">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#0A0E2A] dark:text-white">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="border-[#0A0E2A] dark:border-white bg-white dark:bg-[#0A0E2A] text-[#0A0E2A] dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#0A0E2A] dark:text-white">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="border-[#0A0E2A] dark:border-white bg-white dark:bg-[#0A0E2A] text-[#0A0E2A] dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0A0E2A] dark:text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="border-[#0A0E2A] dark:border-white bg-white dark:bg-[#0A0E2A] text-[#0A0E2A] dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[#0A0E2A] dark:text-white">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="border-[#0A0E2A] dark:border-white bg-white dark:bg-[#0A0E2A] text-[#0A0E2A] dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#0A0E2A] dark:text-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      className="min-h-[120px] border-[#0A0E2A] dark:border-white bg-white dark:bg-[#0A0E2A] text-[#0A0E2A] dark:text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FFA500] hover:bg-[#FF8C00] text-white dark:text-[#0A0E2A]"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
