'use server';

import Airtable, { FieldSet, Records } from 'airtable';

function getAirtableBase() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;

  if (!apiKey || !baseId) {
    console.warn("Airtable API Key or Base ID is not configured. Skipping Airtable connection.");
    return null;
  }

  return new Airtable({ apiKey }).base(baseId);
}

export const getEventsTable = async (filter?: string): Promise<Records<FieldSet>> => {
  const base = getAirtableBase();
  if (!base) return [];

  let filterFormula = '';

  if (filter && filter !== 'All') {
    filterFormula = `{Category} = "${filter}"`;
  }
  
  return base('Events').select({
    view: 'Grid view',
    sort: [{ field: 'Date', direction: 'desc' }],
    filterByFormula: filterFormula,
  }).all();
};

export const findEventByRecordId = async (recordId: string): Promise<FieldSet | null> => {
  const base = getAirtableBase();
  if (!base) return null;
  
  return base('Events').find(recordId);
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

    await base('Members').create([
        {
            fields: memberData,
        },
    ]);
};
