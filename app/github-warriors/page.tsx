import { Metadata } from 'next'
import { GitHubWarriors } from '@/components/github-warriors'

export const metadata: Metadata = {
  title: 'GitHub Warriors - InnovatUp',
  description: 'Meet our top GitHub contributors and open-source warriors',
}

export default function GitHubWarriorsPage() {
  return <GitHubWarriors />
}
