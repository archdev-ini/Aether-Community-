import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { ArrowRight } from 'lucide-react'

export default function Events() {
  const eventImage = PlaceHolderImages.find((img) => img.id === 'event-image')
  
  return (
    <section id="events" className="bg-secondary/50 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
            Upcoming Events
          </h2>
          <p className="mt-6 text-lg text-foreground/70 md:text-xl">
            Join conversations, lectures, and workshops shaping the future of
            design across Africa.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="group w-full max-w-5xl overflow-hidden rounded-xl border shadow-lg transition-shadow duration-300 hover:shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="relative h-80 md:h-auto">
                {eventImage && (
                  <Image
                    src={eventImage.imageUrl}
                    alt={eventImage.description}
                    data-ai-hint={eventImage.imageHint}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <CardContent className="p-0">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    Inaugural Event
                  </p>
                  <blockquote className="border-l-4 border-primary pl-6">
                    <p className="text-2xl font-semibold italic text-foreground lg:text-3xl">
                      “Design Education in Nigeria” — AETHER’s Launch Webinar.
                    </p>
                  </blockquote>
                  <p className="mt-6 text-base text-foreground/70">
                    Be part of our first-ever event where we discuss the current
                    state and future of architectural and design education in
                    Nigeria, featuring prominent industry leaders.
                  </p>
                </CardContent>
                 <div className="mt-8">
                    <Button asChild size="lg" variant="secondary" className="group/button">
                        <Link href="#">
                            Register Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                        </Link>
                    </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
