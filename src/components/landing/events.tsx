import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export default function Events() {
  const eventImage = PlaceHolderImages.find((img) => img.id === 'event-image')
  
  return (
    <section id="events" className="bg-secondary py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Upcoming Events
          </h2>
          <p className="mt-6 text-lg text-foreground/80 md:text-xl">
            Join conversations, lectures, and workshops shaping the future of
            design.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-4xl overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                {eventImage && (
                  <Image
                    src={eventImage.imageUrl}
                    alt={eventImage.description}
                    data-ai-hint={eventImage.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex flex-col justify-center p-8">
                <CardContent className="p-0">
                  <blockquote className="border-l-4 border-primary pl-4">
                    <p className="text-xl font-semibold italic text-foreground">
                      “Design Education in Nigeria” — AETHER’s Launch Webinar.
                    </p>
                  </blockquote>
                  <p className="mt-4 text-foreground/80">
                    Be part of our inaugural event where we discuss the current
                    state and future of architectural and design education in
                    Nigeria.
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="outline" className="bg-transparent">
            <Link href="#">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
