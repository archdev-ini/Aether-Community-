'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock, MapPin, Filter } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { fetchEvents, Event } from '@/app/events/lib/data';
import { Badge } from '@/components/ui/badge';
import { eventCategories } from '@/app/events/lib/event-categories';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

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
        <div className="absolute right-4 top-4 flex gap-2">
            <Badge variant="secondary">{event.category}</Badge>
            <Badge variant={isUpcoming ? 'default' : 'secondary'}>{event.status}</Badge>
        </div>
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
          <Button
            asChild
            variant="secondary"
            className="group/button w-full sm:w-auto"
          >
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

function EventSkeleton() {
    return (
        <Card className="w-full overflow-hidden rounded-xl border shadow-lg">
            <Skeleton className="h-60 w-full" />
            <CardContent className="flex flex-col gap-4 p-6">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="space-y-2 pt-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="mt-auto pt-4">
                    <Skeleton className="h-11 w-36 rounded-md" />
                </div>
            </CardContent>
        </Card>
    );
}


function EventsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const selectedCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    async function loadEvents() {
      setIsLoading(true);
      const fetchedEvents = await fetchEvents(selectedCategory);
      setEvents(fetchedEvents);
      setIsLoading(false);
    }
    loadEvents();
  }, [selectedCategory]);

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', category);
    router.push(`${pathname}?${params.toString()}`);
  };

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
            
            <div className="mt-16 flex justify-center">
              <div className="w-full max-w-sm">
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-full">
                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        <SelectValue placeholder="Filter by category" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Categories</SelectItem>
                    {eventCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {isLoading ? (
                <div className="mt-20">
                     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                        <EventSkeleton />
                        <EventSkeleton />
                     </div>
                </div>
            ) : (
                <>
                    {upcomingEvents.length > 0 && (
                        <div className="mt-20">
                        <h3 className="font-sans text-3xl font-bold tracking-tighter md:text-4xl mb-12 text-center">
                            Upcoming Events
                        </h3>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                            {upcomingEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                        </div>
                    )}

                    {pastEvents.length > 0 && (
                        <div className="mt-20">
                        <h3 className="font-sans text-3xl font-bold tracking-tighter md:text-4xl mb-12 text-center">
                            Past Events
                        </h3>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                            {pastEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                        </div>
                    )}

                    {events.length === 0 && (
                        <div className="mt-20 text-center">
                        <p className="text-lg text-foreground/70">
                            No events found for this category. Please check back later!
                        </p>
                        </div>
                    )}
                </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function EventsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EventsContent />
        </Suspense>
    )
}
