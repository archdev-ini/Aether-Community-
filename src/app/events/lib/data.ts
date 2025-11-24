
'use server';

import { getEvents, getEventById } from '@/lib/supabase-queries';
import { Event as SupabaseEvent } from '@/lib/types';
import { format, parseISO } from 'date-fns';

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

// Helper to format a Supabase event into our Event type
const formatEvent = (record: SupabaseEvent): Event => {
  // Supabase returns the date as an ISO string (e.g., '2024-10-28'). 
  const eventDateStr = record.date;

  return {
    id: record.id,
    title: record.title,
    description: record.description,
    // Format the date to be more readable, e.g., "October 28, 2024"
    date: eventDateStr ? format(parseISO(eventDateStr), 'MMMM d, yyyy') : 'Date not set',
    time: record.time,
    location: record.location,
    imageUrl: record.image_url || 'https://placehold.co/1200x600',
    status: record.status as 'Upcoming' | 'Past',
    registrationUrl: record.registration_url || undefined,
    category: record.category,
    eventCode: record.event_code || undefined,
  };
};

export async function fetchEvents(category?: string): Promise<Event[]> {
  try {
    const effectiveCategory = category === 'All' ? undefined : category;
    const records = await getEvents(effectiveCategory);
    if (!records || records.length === 0) return [];
    const events = records.map(formatEvent);
    return events;
  } catch (error) {
    console.error('Failed to fetch events from Supabase:', error);
    // Return an empty array to prevent the page from crashing
    return [];
  }
}

export async function fetchEventById(id: string): Promise<Event | undefined> {
  try {
    const record = await getEventById(id);
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
