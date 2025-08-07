import { Card } from '@/components/ui/card'

const galleryImages = [
  {
    id: 1,
    title: 'Smart Delhi Ideathon 2024',
    description: 'Students participating in the Smart Delhi Ideathon, showcasing innovative solutions for urban challenges',
    image: '/images/smart-delhi-ideathon-2024.jpg'
  },
  {
    id: 2,
    title: 'Start Up Business Carnival',
    description: 'InnovatUp\'s Business Carnival featuring industry experts sharing knowledge on entrepreneurship and innovation',
    image: '/images/start-up-business-carnival.jpg'
  },
  {
    id: 3,
    title: 'Itrang 2025',
    description: 'Tech conference presentation focusing on sustainable future and innovative waste management solutions',
    image: '/images/itrang-2025.jpg'
  }
]

export function Gallery() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Community in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a look at some of our recent events, workshops, and collaborative sessions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.image || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                <p className="text-muted-foreground text-sm">{image.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
