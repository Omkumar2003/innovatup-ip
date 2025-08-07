import { Card } from '@/components/ui/card'
import { Code, Users, Lightbulb, Github } from 'lucide-react'

const values = [
  {
    icon: Code,
    title: 'Innovation',
    description: 'We push the boundaries of technology and create solutions that matter.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Together we achieve more. Our community thrives on shared knowledge and teamwork.'
  },
  {
    icon: Lightbulb,
    title: 'Learning',
    description: 'Continuous growth through workshops, mentorship, and hands-on projects.'
  },
  {
    icon: Github,
    title: 'Open Source',
    description: 'Contributing to the global developer community through open source projects.'
  }
]

export function Mission() {
  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            InnovatUp is more than just a tech community. We're a family of passionate individuals 
            who believe in the power of technology to change the world. Our mission is to foster 
            innovation, encourage collaboration, and provide a platform for students to showcase 
            their talents while contributing to meaningful projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 flex justify-center">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
