'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Users, Trophy } from 'lucide-react'

export function Hackathon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  
  const hackathonDate = new Date('2025-09-01T00:00:00')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = hackathonDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'hackathon_notification',
            email: email,
            message: 'User requested hackathon notifications'
          }),
        })
        setIsSubscribed(true)
        setEmail('')
      } catch (error) {
        console.error('Error sending notification request:', error)
      }
    }
  }

  const pastHackathons = [
    {
      id: 1,
      title: 'BCIIT Hackathon',
      date: 'November 2024',
      participants: '50',
      projects: '20+',
      winner: 'ResmueBuilder',
      image: ''
    }
  ]

  return (
    <div className="container px-4 py-8">
      {/* Coming Soon Banner */}
      <div className="mb-12">
        <Card className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative p-8 sm:p-12 text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Coming Soon
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              InnovatUp Hack 2025
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              48 hours of innovation, collaboration, and building the future
            </p>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm text-purple-200">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm text-purple-200">Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm text-purple-200">Minutes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm text-purple-200">Seconds</div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              {isSubscribed ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-green-200">✅ You're on the list! We'll notify you when registration opens.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email for updates"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-purple-200"
                  />
                  <Button type="submit" variant="secondary">
                    Notify Me
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Event Details */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Event Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-4 text-purple-600" />
            <h3 className="font-semibold mb-2">Date</h3>
            <p className="text-muted-foreground">September 1, 2025</p>
          </Card>
          <Card className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-4 text-blue-600" />
            <h3 className="font-semibold mb-2">Duration</h3>
            <p className="text-muted-foreground">48 Hours</p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-4 text-green-600" />
            <h3 className="font-semibold mb-2">Expected</h3>
            <p className="text-muted-foreground">100+ Participants</p>
          </Card>
          <Card className="p-6 text-center">
            <Trophy className="h-8 w-8 mx-auto mb-4 text-yellow-600" />
            <h3 className="font-semibold mb-2">Prizes</h3>
            <p className="text-muted-foreground">₹50,000+ Total</p>
          </Card>
        </div>
      </div>

      {/* Past Hackathons */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Past Hackathon Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastHackathons.map((hackathon) => (
            <Card key={hackathon.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={"/placeholder.svg"}
                  alt={hackathon.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{hackathon.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{hackathon.date}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Participants:</span>
                    <span className="font-medium">{hackathon.participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projects:</span>
                    <span className="font-medium">{hackathon.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Winner:</span>
                    <span className="font-medium text-purple-600">{hackathon.winner}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
