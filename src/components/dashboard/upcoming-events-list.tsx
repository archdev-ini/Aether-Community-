import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CalendarDays, MapPin } from 'lucide-react';
import { getEvents } from '@/lib/supabase-queries';

export default async function UpcomingEventsList() {
    const events = await getEvents();
    const upcomingEvents = events.slice(0, 3); // Get first 3 events

    return (
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle>Upcoming Events</CardTitle>
                        <CardDescription>Don't miss out on what's happening next.</CardDescription>
                    </div>
                    <Button variant="ghost" asChild>
                        <Link href="/events">View All</Link>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map((event) => (
                            <div
                                key={event.id}
                                className="flex flex-col space-y-2 rounded-lg border p-4 hover:bg-accent/50 transition-colors sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                            >
                                <div className="space-y-1">
                                    <h4 className="font-semibold">{event.title}</h4>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <CalendarDays className="mr-2 h-4 w-4" />
                                        {new Date(event.date).toLocaleDateString(undefined, {
                                            weekday: 'short',
                                            month: 'short',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                        })}
                                    </div>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <MapPin className="mr-2 h-4 w-4" />
                                        {event.location}
                                    </div>
                                </div>
                                <Button size="sm" asChild>
                                    <Link href={`/events/${event.id}`}>View Details</Link>
                                </Button>
                            </div>
                        ))
                    ) : (
                        <div className="flex h-[150px] items-center justify-center rounded-lg border border-dashed text-muted-foreground">
                            No upcoming events found.
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
