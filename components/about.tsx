import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Figma, Code, Database, Smartphone, Globe } from 'lucide-react'

const timeline = [
  {
    year: 'Early 2024',
    title: 'The Beginning',
    description: 'InnovatUp was founded by Alok Mishra and a passionate group of computer science students who wanted to create a collaborative space for innovation at BCIIT.'
  },
  {
    year: '2024',
    title: 'First Events',
    description: 'Organized our first hackathon and startup events, marking the beginning of our community-driven initiatives.'
  },
  {
    year: '2024',
    title: 'Open Source Initiative',
    description: 'Launched our GitHub organization and started contributing to open source projects as a community.'
  },
  {
    year: '2024',
    title: 'Growing Community',
    description: 'Reached 30+ active members and established partnerships with local tech companies and educational institutions.'
  }
]

const techStack = [
  { name: 'Frontend', icon: Globe, tools: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
  { name: 'Backend', icon: Database, tools: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
  { name: 'Mobile', icon: Smartphone, tools: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { name: 'Design', icon: Figma, tools: ['Figma', 'Adobe XD', 'Sketch', 'Framer'] },
  { name: 'DevOps', icon: Code, tools: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'] },
  { name: 'Version Control', icon: Github, tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket'] }
]

export function About() {
  return (
    <div className="container px-4 py-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">About InnovatUp</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We are a vibrant community of 30+ student developers, designers, startup enthusiasts, 
          and open-source contributors united by our passion for technology and innovation.
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-16">
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-muted-foreground leading-relaxed mb-4">
              InnovatUp began as a simple idea: what if we could create a space where passionate students 
              could come together to learn, build, and innovate? Founded in early 2024 by Alok Mishra and a group of 
              dedicated computer science students at BCIIT, we started with just a handful of members meeting 
              in a small classroom.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today, we've grown into a thriving community of over 30 active members, including developers, 
              designers, product managers, and entrepreneurs. Under the leadership of Alok Mishra, we've organized 
              multiple hackathons, contributed to dozens of open-source projects, and helped launch several 
              innovative startup ideas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission remains the same: to foster innovation, encourage collaboration, and provide a 
              platform for students to showcase their talents while making meaningful contributions to the 
              tech community at BCIIT and beyond.
            </p>
          </div>
        </Card>
      </div>

      {/* Leadership */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Leadership</h2>
        <Card className="p-8 text-center max-w-md mx-auto">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">AM</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Alok Mishra</h3>
          <p className="text-muted-foreground mb-4">InnovatUp Lead & Founder</p>
          <p className="text-sm text-muted-foreground">
            Leading our community of 30+ passionate developers and innovators at BCIIT
          </p>
        </Card>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{item.year}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Technologies We Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <Badge key={toolIndex} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center">What Drives Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We believe in pushing boundaries and creating solutions that make a real difference in the world.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
              <Github className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Open Source</h3>
            <p className="text-muted-foreground">
              Contributing to the global developer community through open source projects and knowledge sharing.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
              <Figma className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
            <p className="text-muted-foreground">
              Together we achieve more. Our community thrives on shared knowledge and teamwork.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
