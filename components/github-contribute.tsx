import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Github, Star, GitFork, Users } from 'lucide-react'
import Link from 'next/link'

export function GitHubContribute() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <div className="relative p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-4 flex justify-center lg:justify-start">
                    <Github className="h-12 w-12" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Contribute?
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Join our open-source community and help build amazing projects. 
                    Whether you're a beginner or an expert, there's a place for you in our GitHub organization.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                      <Link href="https://github.com/Innovatup" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Contribute Now
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                      <Link href="/contribution-guide">
                        View Guide
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <Star className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm text-gray-300">Stars</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <GitFork className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm text-gray-300">Forks</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <Users className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-2xl font-bold">30+</div>
                      <div className="text-sm text-gray-300">Contributors</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
