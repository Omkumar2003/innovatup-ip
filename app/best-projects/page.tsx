import { Metadata } from 'next'
import { BestProjects } from '@/components/best-projects'

export const metadata: Metadata = {
  title: 'Best Projects - InnovatUp',
  description: 'Discover the most innovative projects built by our community',
}

export default function BestProjectsPage() {
  return <BestProjects />
}
