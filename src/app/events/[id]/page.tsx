import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { fetchEventById } from '@/app/events/lib/data';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

export default async function EventDetailsPage({ params }: { params: { id: string } }) {
  const event = await fetchEventById(params.id);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-24 sm:py-32">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="mb-8">
                <Button asChild variant="outline">
                    <Link href="/events" className="inline-flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Events
                    </Link>
                </Button>
            </div>
          <div className="relative mb-12 h-64 w-full overflow-hidden rounded-xl md:h-[400px]">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <Badge variant={event.status === 'Upcoming' ? 'default' : 'secondary'} className="mb-4">
                {event.status}
              </Badge>
              <h1 className="font-sans text-4xl font-bold tracking-tighter sm:text-5xl">
                {event.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                {event.description}
              </p>
            </div>

            <div>
              <Card className="sticky top-28 shadow-lg">
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 text-base">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                    <div>
                        <p className="font-semibold">Date</p>
                        <p className="text-foreground/80">{event.date}</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                     <div>
                        <p className="font-semibold">Time</p>
                        <p className="text-foreground/80">{event.time}</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                    <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-foreground/80">{event.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
