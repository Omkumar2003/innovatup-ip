import { Metadata } from 'next'
import { About } from '@/components/about'

export const metadata: Metadata = {
  title: 'About Us - InnovatUp',
  description: 'Learn about InnovatUp\'s mission, story, and the passionate team behind our tech community',
}

export default function AboutPage() {
  return <About />
}
