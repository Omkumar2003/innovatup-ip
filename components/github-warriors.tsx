'use client'

import { useState, useEffect, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, ChevronLeft, ChevronRight, Github } from 'lucide-react'
import Link from 'next/link'

// Real GitHub contributors
const realContributors = [
  {
    id: 1,
    username: 'Omkumar2003',
    githubUrl: 'https://github.com/Omkumar2003',
  },
  {
    id: 2,
    username: 'vannu07',
    githubUrl: 'https://github.com/vannu07',
  },
  {
    id: 3,
    username: 'gorangaggarwal',
    githubUrl: 'https://github.com/gorangaggarwal',
  },
  {
    id: 4,
    username: 'KushalKulshrestha',
    githubUrl: 'https://github.com/KushalKulshrestha',
  },
  {
    id: 5,
    username: 'itsshaliniS',
    githubUrl: 'https://github.com/itsshaliniS',
  }
]

const ITEMS_PER_PAGE = 30

export function GitHubWarriors() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [contributors, setContributors] = useState(realContributors)

  // Fetch GitHub profile pictures
  useEffect(() => {
    const fetchProfilePictures = async () => {
      const updatedContributors = await Promise.all(
        realContributors.map(async (contributor) => {
          try {
            const response = await fetch(`https://api.github.com/users/${contributor.username}`)
            const userData = await response.json()
            return {
              ...contributor,
              avatar: userData.avatar_url || `/placeholder.svg?height=80&width=80&query=${contributor.username}`
            }
          } catch (error) {
            return {
              ...contributor,
              avatar: `/placeholder.svg?height=80&width=80&query=${contributor.username}`
            }
          }
        })
      )
      setContributors(updatedContributors)
    }

    fetchProfilePictures()
  }, [])

  const filteredContributors = useMemo(() => {
    return contributors.filter(contributor =>
      contributor.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [contributors, searchTerm])

  const totalPages = Math.ceil(filteredContributors.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentContributors = filteredContributors.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <div className="container px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">GitHub Warriors</h1>
        <p className="text-muted-foreground text-lg">
          Meet our amazing community of open-source contributors and developers
        </p>
      </div>

      {/* Search Control */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by username..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1)
            }}
            className="pl-10"
          />
        </div>
      </div>

      {/* Contributors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {currentContributors.map((contributor) => (
          <Card key={contributor.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <img
                src={contributor.avatar || "/placeholder.svg"}
                alt={contributor.username}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg mb-4">{contributor.username}</h3>
              
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href={contributor.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Profile
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <div className="flex items-center space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i
              if (pageNum > totalPages) return null
              
              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </Button>
              )
            })}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Results Info */}
      <div className="text-center text-sm text-muted-foreground mt-4">
        Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredContributors.length)} of {filteredContributors.length} contributors
      </div>
    </div>
  )
}
