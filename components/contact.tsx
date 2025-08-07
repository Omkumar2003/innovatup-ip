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
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
       
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Get in touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Email</p>
                  <Link href="mailto:omkumar7420031@gmail.com" className="text-muted-foreground hover:text-primary">omkumar7420031@gmail.com</Link>
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
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-3 rounded-lg border hover:shadow-md transition-all duration-200 ${social.color}`}>
                  <social.icon className="h-5 w-5" />
                  <span className="font-medium">{social.name}</span>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
