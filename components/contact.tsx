'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Github, Linkedin, MapPin, CheckCircle } from 'lucide-react'
import Link from 'next/link'

// This is a NAMED EXPORT. The name "Contact" must be used when importing.
export function Contact() {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
})
const [isSubmitted, setIsSubmitted] = useState(false)
const [isLoading, setIsLoading] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  
  const payload = {
    type: 'contact',
    ...formData
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } else {
      console.error('Failed to send message.');
    }
  } catch (error) {
    console.error('Error sending message:', error);
  } finally {
    setIsLoading(false);
  }
}

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })
}

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Innovatup', color: 'hover:text-gray-900 dark:hover:text-white' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/innovatup-the-innovation-and-startup-cell-of-bciit/', color: 'hover:text-blue-600' },
  { name: 'Email', icon: Mail, url: 'mailto:omkumar7420031@gmail.com', color: 'hover:text-red-600' }
]

return (
  <div className="container px-4 py-8">
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-muted-foreground text-lg">
        Have a question, suggestion, or want to collaborate? We'd love to hear from you!
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* START: Moved Contact Form Card */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline" 
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, question, or how you'd like to get involved..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>
          {/* END: Moved Contact Form Card */}

          {/* This div contains the "Get in touch" and "Follow us" cards */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Get in touch</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <Link href="mailto:omkumar7420031@gmail.com" className="text-muted-foreground hover:text-primary">
                      omkumar7420031@gmail.com
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Bciit building top floor, New Delhi, 110080</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Follow us</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg border hover:shadow-md transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="font-medium">{social.name}</span>
                  </Link>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
              <h3 className="font-semibold mb-2">Want to contribute?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out our contribution guide and join our GitHub organization to start contributing to our projects.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/contribution-guide">
                  <Github className="mr-2 h-4 w-4" />
                  Contribution Guide
                </Link>
              </Button>
            </Card>
          </div>
        </div>
  </div>
)
}
