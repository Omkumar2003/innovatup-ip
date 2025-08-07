import { Hero } from '@/components/hero'
import { Gallery } from '@/components/gallery'
import { Mission } from '@/components/mission'
import { GitHubContribute } from '@/components/github-contribute'
import { Newsletter } from '@/components/newsletter'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Mission />
      <GitHubContribute />
      <Newsletter />
    </main>
  )
}
