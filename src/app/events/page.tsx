import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { fetchEvents, Event } from '@/app/events/lib/data';
import { Badge } from '@/components/ui/badge';

function EventCard({ event }: { event: Event }) {
  const isUpcoming = event.status === 'Upcoming';
  const eventUrl = `/events/${event.id}`;

  return (
    <Card className="group w-full overflow-hidden rounded-xl border shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <div className="relative h-60 w-full">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute right-4 top-4" variant={isUpcoming ? 'default' : 'secondary'}>{event.status}</Badge>
      </div>
      <CardContent className="flex flex-col gap-4 p-6">
        <div>
            <h3 className="font-sans text-2xl font-bold tracking-tight">
                {event.title}
            </h3>
            <p className="mt-2 text-base text-foreground/70 line-clamp-3">
                {event.description}
            </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-foreground/80">
            <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{event.location}</span>
            </div>
        </div>
        <div className="mt-auto pt-4">
          <Button asChild variant="secondary" className="group/button w-full sm:w-auto">
            <Link href={eventUrl}>
              View Details
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/button:translate-x-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function EventsPage() {
  const events = await fetchEvents();
  const upcomingEvents = events.filter((e) => e.status === 'Upcoming');
  const pastEvents = events.filter((e) => e.status === 'Past');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="events" className="py-24 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-sans text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                Events
              </h2>
              <p className="mt-6 text-lg text-foreground/70 md:text-xl">
                Join conversations, lectures, and workshops shaping the future
                of design across Africa.
              </p>
            </div>

            {upcomingEvents.length > 0 && (
                <div className="mt-20">
                    <h3 className="font-sans text-3xl font-bold tracking-tighter md:text-4xl mb-12 text-center">Upcoming Events</h3>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {upcomingEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            )}

            {pastEvents.length > 0 && (
                <div className="mt-20">
                    <h3 className="font-sans text-3xl font-bold tracking-tighter md:text-4xl mb-12 text-center">Past Events</h3>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {pastEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            )}
            
            {events.length === 0 && (
                <div className="mt-20 text-center">
                    <p className="text-lg text-foreground/70">No events scheduled at the moment. Please check back later!</p>
                </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
