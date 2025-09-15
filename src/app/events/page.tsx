
import { Suspense } from 'react';
import { fetchEvents } from '@/app/events/lib/data';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import EventsContent from './_components/events-content';
import { Skeleton } from '@/components/ui/skeleton';

function EventsPageSkeleton() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="events" className="py-24 sm:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <Skeleton className="h-16 w-3/4 mx-auto" />
              <Skeleton className="h-6 w-full mx-auto mt-6" />
            </div>
            <div className="mt-16 flex justify-center">
              <Skeleton className="h-10 w-full max-w-sm" />
            </div>
            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                <Skeleton className="h-96 w-full" />
                <Skeleton className="h-96 w-full" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const category = searchParams?.category || 'All';
  const initialEvents = await fetchEvents(category);

  return (
    <Suspense fallback={<EventsPageSkeleton />}>
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
              <EventsContent initialEvents={initialEvents} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}
