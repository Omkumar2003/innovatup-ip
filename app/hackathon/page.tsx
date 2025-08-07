import { Metadata } from 'next'
import { Hackathon } from '@/components/hackathon'

export const metadata: Metadata = {
  title: 'Hackathon - InnovatUp',
  description: 'Join our upcoming hackathon events and showcase your skills',
}

export default function HackathonPage() {
  return <Hackathon />
}
