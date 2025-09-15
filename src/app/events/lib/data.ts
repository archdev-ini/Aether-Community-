'use server';

import { FieldSet } from 'airtable';
import { getEventsTable, findEventByRecordId } from '@/lib/airtable';
import { format } from 'date-fns';

export type Event = {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    imageUrl: string;
    status: 'Upcoming' | 'Past';
    registrationUrl?: string;
    category: string;
    eventCode?: string;
};

// Helper to format an Airtable record into our Event type
const formatEvent = (record: FieldSet): Event => {
    const eventDate = new Date(record.Date as string);
    const now = new Date();
    // Set time to 00:00:00 to compare dates only
    eventDate.setHours(0,0,0,0);
    now.setHours(0,0,0,0);
    
    // The 'Image' field from Airtable is an array of attachment objects
    const imageAttachment = (record.Image as any[])?.[0];
    const imageUrl = imageAttachment?.url || 'https://placehold.co/1200x600';

    return {
        id: record.id as string,
        title: record.Title as string,
        description: record.Description as string,
        // Format the date to be more readable, e.g., "October 28, 2024"
        date: format(new Date(record.Date as string), 'MMMM d, yyyy'),
        time: record.Time as string,
        location: record.Location as string,
        imageUrl: imageUrl,
        // Determine status by comparing event date with today's date
        status: eventDate >= now ? 'Upcoming' : 'Past',
        registrationUrl: record.RegistrationURL as string,
        category: record.Category as string,
        eventCode: record.EventCode as string,
    };
};

export async function fetchEvents(category?: string): Promise<Event[]> {
  try {
    const effectiveCategory = category === 'All' ? undefined : category;
    const records = await getEventsTable(effectiveCategory);
    if (!records) return [];
    const events = records.map(formatEvent);
    return events;
  } catch (error) {
    console.error('Failed to fetch events from Airtable:', error);
    // Return an empty array to prevent the page from crashing
    return [];
  }
}

export async function fetchEventById(id: string): Promise<Event | undefined> {
  try {
    const record = await findEventByRecordId(id);
    if (record) {
      return formatEvent(record);
    }
    return undefined;
  } catch (error) {
    console.error(`Failed to fetch event with id ${id}:`, error);
    // Return undefined to allow the page to show a 404, but not crash
    return undefined;
  }
}
