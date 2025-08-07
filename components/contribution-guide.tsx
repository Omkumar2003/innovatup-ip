import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, GitFork, GitPullRequest, MessageSquare, Star, Users } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    step: 1,
    title: 'Join our GitHub Organization',
    description: 'Start by joining our GitHub organization to get access to all our repositories.',
    icon: Github,
    action: 'Visit GitHub'
  },
  {
    step: 2,
    title: 'Find a Project',
    description: 'Browse our repositories and find a project that matches your interests and skill level.',
    icon: Star,
    action: 'Browse Projects'
  },
  {
    step: 3,
    title: 'Fork & Clone',
    description: 'Fork the repository to your account and clone it to your local machine.',
    icon: GitFork,
    action: 'Learn Git'
  },
  {
    step: 4,
    title: 'Make Changes',
    description: 'Create a new branch, make your changes, and test them thoroughly.',
    icon: MessageSquare,
    action: 'Best Practices'
  },
  {
    step: 5,
    title: 'Submit Pull Request',
    description: 'Push your changes and create a pull request with a clear description.',
    icon: GitPullRequest,
    action: 'PR Template'
  },
  {
    step: 6,
    title: 'Collaborate',
    description: 'Work with maintainers to review and improve your contribution.',
    icon: Users,
    action: 'Join Discord'
  }
]

const projectTypes = [
  {
    title: 'Beginner Friendly',
    description: 'Perfect for first-time contributors',
    badge: 'good first issue',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    projects: ['Documentation updates', 'Bug fixes', 'UI improvements', 'Test writing']
  },
  {
    title: 'Intermediate',
    description: 'For developers with some experience',
    badge: 'help wanted',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    projects: ['Feature implementation', 'API integration', 'Performance optimization', 'Code refactoring']
  },
  {
    title: 'Advanced',
    description: 'Complex projects for experienced contributors',
    badge: 'enhancement',
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    projects: ['Architecture design', 'Security improvements', 'DevOps setup', 'Advanced algorithms']
  }
]

export function ContributionGuide() {
  return (
    <div className="container px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Contribution Guide</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Welcome to the InnovatUp community! Here's everything you need to know to start contributing to our open-source projects.
        </p>
      </div>

      {/* Getting Started Steps */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card key={step.step} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                <step.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
              <Button variant="outline" size="sm" className="w-full">
                {step.action}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Types */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Find Your Level</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projectTypes.map((type, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{type.description}</p>
                <Badge className={type.color}>{type.badge}</Badge>
              </div>
              <ul className="space-y-2">
                {type.projects.map((project, projectIndex) => (
                  <li key={projectIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
                    {project}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Code of Conduct */}
      <div className="mb-12">
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <h2 className="text-2xl font-bold mb-4">Code of Conduct</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-muted-foreground mb-4">
              We are committed to providing a welcoming and inclusive environment for all contributors. 
              By participating in our community, you agree to abide by our code of conduct:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Be respectful and inclusive in all interactions</li>
              <li>• Provide constructive feedback and be open to receiving it</li>
              <li>• Focus on what is best for the community and projects</li>
              <li>• Show empathy towards other community members</li>
              <li>• Respect different viewpoints and experiences</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Helpful Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Development Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://git-scm.com/doc" className="text-blue-600 hover:underline">
                  Git Documentation
                </Link>
                <p className="text-sm text-muted-foreground">Learn Git basics and advanced concepts</p>
              </li>
              <li>
                <Link href="https://docs.github.com/en/pull-requests" className="text-blue-600 hover:underline">
                  GitHub Pull Requests
                </Link>
                <p className="text-sm text-muted-foreground">How to create and manage pull requests</p>
              </li>
              <li>
                <Link href="https://conventionalcommits.org/" className="text-blue-600 hover:underline">
                  Conventional Commits
                </Link>
                <p className="text-sm text-muted-foreground">Writing better commit messages</p>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://discord.gg/innovatup" className="text-blue-600 hover:underline">
                  Discord Server
                </Link>
                <p className="text-sm text-muted-foreground">Join our community discussions</p>
              </li>
              <li>
                <Link href="https://github.com/innovatup/discussions" className="text-blue-600 hover:underline">
                  GitHub Discussions
                </Link>
                <p className="text-sm text-muted-foreground">Ask questions and share ideas</p>
              </li>
              <li>
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Contact Us
                </Link>
                <p className="text-sm text-muted-foreground">Get in touch with maintainers</p>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Contribute?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of developers who are already contributing to InnovatUp projects. 
            Your contributions, no matter how small, make a difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link href="https://github.com/innovatup" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link href="/contact">
                Get Help
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
