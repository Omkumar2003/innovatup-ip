'use client'

import { Card } from '@/components/ui/card'
import { Mail } from 'lucide-react'

export function Newsletter() {
  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl">
          <Card className="p-8 text-center">
            <div className="mb-6">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest updates on events, workshops, and community news delivered to your inbox.
              </p>
            </div>

            {/* Substack Embed */}
            <div className="flex justify-center">
              <iframe 
                src="https://omsahil.substack.com/embed" 
                width="480" 
                height="320" 
                style={{
                  border: '1px solid #EEE', 
                  background: 'white',
                  maxWidth: '100%'
                }} 
                frameBorder="0" 
                scrolling="no"
                title="Newsletter Subscription"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
