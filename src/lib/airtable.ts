'use server';

import Airtable, { FieldSet, Records } from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID || 'appC10wiIxtUfrlc9'
);

export const getEventsTable = async (filter?: string): Promise<Records<FieldSet>> => {
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

export const findEventByRecordId = async (recordId: string): Promise<FieldSet> => {
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
    await base('Members').create([
        {
            fields: memberData,
        },
    ]);
};
