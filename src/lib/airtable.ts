'use server';

import Airtable, { Attachment, FieldSet, Records } from 'airtable';

function getAirtableBase() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!apiKey || !baseId) {
    console.warn("Airtable API Key or Base ID is not configured. Skipping Airtable connection.");
    return null;
  }

  return new Airtable({ apiKey }).base(baseId);
}

export const getEventsTable = async (category?: string): Promise<Records<FieldSet>> => {
  const base = getAirtableBase();
  if (!base) return [];

  let filterFormula = '';

  if (category && category !== 'All') {
    filterFormula = `{Category} = "${category}"`;
  }
  
  try {
    const records = await base('Events').select({
      view: 'Grid view',
      sort: [{ field: 'Date', direction: 'desc' }],
      filterByFormula: filterFormula,
    }).all();
    return records;
  } catch (error) {
    console.error('Failed to fetch events from Airtable:', error);
    return [];
  }
};

export const findEventByRecordId = async (recordId: string): Promise<FieldSet | null> => {
  const base = getAirtableBase();
  if (!base) return null;
  
  try {
    return await base('Events').find(recordId);
  } catch (error) {
    console.error(`Failed to fetch event with id ${recordId}:`, error);
    return null;
  }
}

export type NewMember = {
    AetherID: string;
    FullName: string;
    Email: string;
    Location: string;
    Journey: string;
    Experience: string;
    Interests: string;
    Contributions: string;
}

export const createMember = async (memberData: NewMember): Promise<void> => {
    const base = getAirtableBase();
    if (!base) return;

    try {
        await base('Members').create([
            {
                fields: memberData,
            },
        ]);
    } catch (error) {
        console.error('Failed to create member in Airtable:', error);
        throw new Error('Airtable API error.');
    }
};

export type NewEvent = {
    Title: string;
    Description: string;
    Date: string; // YYYY-MM-DD
    Time: string;
    Location: string;
    Category: string;
    Status: 'Upcoming' | 'Past';
    Image?: Attachment[];
    RegistrationURL?: string;
    EventCode?: string;
}

export const createEvent = async (eventData: NewEvent): Promise<void> => {
    const base = getAirtableBase();
    if (!base) return;

    try {
        await base('Events').create([
            {
                fields: eventData,
            },
        ]);
    } catch (error) {
        console.error('Failed to create event in Airtable:', error);
        throw new Error('Airtable API error.');
    }
}
