import { Metadata } from 'next'
import { StartupIdeas } from '@/components/startup-ideas'

export const metadata: Metadata = {
  title: 'Startup Ideas - InnovatUp',
  description: 'Share and discover innovative startup ideas from our community',
}

export default function StartupIdeasPage() {
  return <StartupIdeas />
}
