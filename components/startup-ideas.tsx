'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, Plus, Heart, MessageCircle, Github, CheckCircle } from 'lucide-react'
import Link from 'next/link'

// Mock data for startup ideas - this part remains unchanged
const mockIdeas = [
  {
    id: 1,
    title: 'Farm IQ',
    description: 'Farm-IQ is an intelligent farming assistant that leverages Machine Learning and Deep Learning to provide farmers with data-driven insights for optimal agricultural decisions. Our platform offers three core AI-powered features designed to maximize crop yield and minimize losses.',
    techStack: ['Js', 'Python', 'TenserFlow', 'Matplotlib'],
    author: 'Varnit',
    likes: 0,
    comments: 0,
    createdAt: '2024-01-15',
    githubUrl: 'https://github.com/vannu07/Farm-IQ-AI-Powered-Smart-Farming-Assistant',
    status: 'ongoing'
  },
  {
    id: 2,
    title: 'Roast Ai',
    description: 'RoastMe.AI is your daily slap of reality — a savage mobile app that roasts you based on your screen time. Fueled by AI and the brutal honesty of Rick and Morty, we take your mindless scrolling and turn it into guilt-laced comedy gold.',
    techStack: ['java', 'python', 'Room Db', 'S3'],
    author: 'Om Kumar',
    likes: 0,
    comments: 0,
    createdAt: '2024-01-14',
    githubUrl: 'https://github.com/Innovatup/ScreenRoaster-apk',
    status: 'ongoing'
  }
]

export function StartupIdeas() {
  const [ideas, setIdeas] = useState(mockIdeas)
  const [showForm, setShowForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  // MODIFIED: Unified form state now includes name and email
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    techStack: ''
  })

  // NEW: A single handler for all form inputs to keep code clean
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  // MODIFIED: The submission logic now sends the unified data structure
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'startup_idea',
          ...formData // This now includes name, email, title, etc.
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset the form fully
        setFormData({ name: '', email: '', title: '', description: '', techStack: '' });
        setShowForm(false);
      } else {
        console.error('Failed to send startup idea email');
      }
    } catch (error) {
      console.error('Error sending startup idea:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleLike = (id: number) => {
    setIdeas(ideas.map(idea => 
      idea.id === id ? { ...idea, likes: idea.likes + 1 } : idea
    ))
  }

  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Startup Ideas</h1>
        <p className="text-muted-foreground text-lg mb-6">
          Share your innovative ideas and collaborate with the community to bring them to life
        </p>
        
        <Button onClick={() => { setShowForm(!showForm); setIsSubmitted(false); }} className="mb-6">
          <Plus className="mr-2 h-4 w-4" />
          Share Your Idea
        </Button>
      </div>

      {/* MODIFIED: Idea Submission Form now includes Name and Email fields */}
      {showForm && (
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Submit Your Startup Idea</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="startup-name" className="block text-sm font-medium mb-2">Your Name</label>
                <Input
                  id="startup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="So we know who to credit!"
                  required
                />
              </div>
              <div>
                <label htmlFor="startup-email" className="block text-sm font-medium mb-2">Your Email</label>
                <Input
                  id="startup-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="So we can contact you"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="startup-title" className="block text-sm font-medium mb-2">Idea Title</label>
              <Input
                id="startup-title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter your startup idea title"
                required
              />
            </div>
            <div>
              <label htmlFor="startup-description" className="block text-sm font-medium mb-2">Description</label>
              <Textarea
                id="startup-description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your startup idea in detail"
                rows={4}
                required
              />
            </div>
            <div>
              <label htmlFor="startup-techstack" className="block text-sm font-medium mb-2">Tech Stack</label>
              <Input
                id="startup-techstack"
                name="techStack"
                value={formData.techStack}
                onChange={handleInputChange}
                placeholder="e.g., React, Node.js, MongoDB (comma-separated)"
                required
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit Idea'}
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Submission Success Message */}
      {isSubmitted && (
        <Card className="p-6 mb-8 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Idea Submitted!</h3>
          <p className="text-muted-foreground">
            Thank you for sharing your idea! We'll review it and reach out for further discussion.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
            Submit Another Idea
          </Button>
        </Card>
      )}

      {/* Community Collaboration Message */}
      <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-3">
          <Lightbulb className="h-6 w-6 text-blue-600" />
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">Our community collaborates on the best ideas</h3>
            <p className="text-blue-700 dark:text-blue-200 text-sm">
              The most promising ideas get picked up by our development teams for implementation
            </p>
          </div>
        </div>
      </Card>

      {/* Ideas Grid (Unchanged) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ideas.map((idea) => (
          <Card key={idea.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{idea.title}</h3>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  Ongoing Development
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">{idea.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {idea.techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span>by @{idea.author}</span>
                <span>{idea.createdAt}</span>
              </div>

              <Button variant="outline" size="sm" asChild className="mb-4 w-full">
                <Link href={idea.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Repository
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleLike(idea.id)}
                className="flex items-center gap-2"
              >
                <Heart className="h-4 w-4" />
                {idea.likes}
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                {idea.comments}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
