import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IU</span>
              </div>
              <span className="font-bold text-xl">InnovatUp</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              A community of student developers, designers, and innovators building the future of technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/github-warriors" className="text-muted-foreground hover:text-primary">GitHub Warriors</Link></li>
              <li><Link href="/startup-ideas" className="text-muted-foreground hover:text-primary">Startup Ideas</Link></li>
              <li><Link href="/best-projects" className="text-muted-foreground hover:text-primary">Best Projects</Link></li>
              <li><Link href="/hackathon" className="text-muted-foreground hover:text-primary">Hackathon</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/contribution-guide" className="text-muted-foreground hover:text-primary">Contribution Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/Innovatup" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/company/innovatup-the-innovation-and-startup-cell-of-bciit/" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:omkumar7420031@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 InnovatUp. Built with ❤️ by the community.</p>
        </div>
      </div>
    </footer>
  )
}
