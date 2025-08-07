'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Github, Star, GitFork } from 'lucide-react'
import Link from 'next/link'

const mockProjects = [
  {
    id: 1,
    title: 'ScreenRoaster',
    description: 'RoastMe.AI is your daily slap of reality - a savage mobile app that roasts you based on your screen time. Fueled by AI and the brutal honesty of Rick and Morty, we take your mindless scrolling and turn it into guilt-laced comedy gold.',
    image: '/placeholder.svg?height=200&width=300',
    techStack: ['Java', 'Python', 'Room DB'],
    githubUrl: 'https://github.com/Innovatup/ScreenRoaster-apk',
    stars: 0,
    forks: 0,
    contributors: ['Varnit', 'Om', 'Shalini', 'Kushal'],
    status: 'ongoing'
  },
  {
    id: 2,
    title: 'Farm-IQ',
    description: 'Farm-IQ is an intelligent farming assistant that leverages Machine Learning and Deep Learning to provide farmers with data-driven insights for optimal agricultural decisions. Our platform offers three core AI-powered features designed to maximize crop yield and minimize losses.',
    image: '/placeholder.svg?height=200&width=300',
    techStack: ['JavaScript', 'Python', 'TensorFlow', 'Matplotlib'],
    githubUrl: 'https://github.com/vannu07/Farm-IQ-AI-Powered-Smart-Farming-Assistant',
    stars: 0,
    forks: 0,
    contributors: ['Varnit'],
    status: 'ongoing'
  },
  {
    id: 3,
    title: 'Interpreter in Go',
    description: 'A web-based playground and compiler for a custom programming language with Hindi-inspired keywords.',
    image: '/placeholder.svg?height=200&width=300',
    techStack: ['Golang', 'Flask', 'Docker'],
    githubUrl: 'https://github.com/Omkumar2003/Interpreter',
    stars: 0,
    forks: 0,
    contributors: ['Om'],
    status: 'ongoing'
  },
  {
    id: 4,
    title: 'MicroBalancer',
    description: 'A load balancer supporting multiple LB strategies written in Java.',
    image: '/placeholder.svg?height=200&width=300',
    techStack: ['Java', 'Maven'],
    githubUrl: 'https://github.com/Omkumar2003/MicroBalancer',
    stars: 0,
    forks: 0,
    contributors: ['Om'],
    status: 'ongoing'
  }
]

const techStackOptions = [
  'All',
  'React',
  'Node.js',
  'Python',
  'Vue.js',
  'Next.js',
  'React Native',
  'PostgreSQL',
  'MongoDB',
  'TensorFlow',
  'Docker'
]

export function BestProjects() {
  const [selectedTech, setSelectedTech] = useState('All')

  const filteredProjects = selectedTech === 'All' 
    ? mockProjects 
    : mockProjects.filter(project => 
        project.techStack.includes(selectedTech)
      )

  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Best Projects</h1>
        <p className="text-muted-foreground text-lg mb-6">
          Discover the most innovative and impactful projects built by our community members
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <span className="text-sm font-medium">Filter by tech stack:</span>
          <Select value={selectedTech} onValueChange={setSelectedTech}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Select technology" />
            </SelectTrigger>
            <SelectContent>
              {techStackOptions.map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  Ongoing Development
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {project.stars}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  {project.forks}
                </div>
                <div className="text-xs">
                  {project.contributors.length} contributors
                </div>
              </div>
              
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Repository
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found for the selected technology.</p>
        </div>
      )}
    </div>
  )
}
