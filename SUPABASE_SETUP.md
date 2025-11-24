# Supabase Setup Guide for Aether Community

This guide will help you set up the Supabase backend for the Aether Community project.

## Prerequisites

- A Supabase account (https://supabase.com)
- The `supabase-schema.sql` file (located in the root of this project)
- The `migration.sql` file (located in the root of this project)

## Step 1: Create a Supabase Project

1.  Log in to your Supabase dashboard.
2.  Click "New Project".
3.  Choose your organization, name your project (e.g., "Aether Community"), and set a database password.
4.  Select a region close to your users.
5.  Click "Create new project".

## Step 2: Get API Keys

1.  Once your project is created, go to **Project Settings** -> **API**.
2.  Copy the `Project URL` and `anon` public key.
3.  Update your `.env` file in the project root with these values:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

*(Note: You have already provided these keys, and I have updated your `.env` file. Double-check that they are correct.)*

## Step 3: Set Up Database Schema

1.  In the Supabase dashboard, go to the **SQL Editor** (icon on the left sidebar).
2.  Click "New query".
3.  Copy the entire content of `supabase-schema.sql` from your project root.
4.  Paste it into the SQL Editor.
5.  Click "Run" to execute the query. This will create the initial tables (`members`, `events`) and policies.

## Step 4: Run Migrations

Since we updated the Join form to include new fields, we need to update the database schema.

1.  In the Supabase SQL Editor, click "New query" again.
2.  Copy the content of `migration.sql` from your project root.
3.  Paste it into the SQL Editor.
4.  Click "Run". This will add the new columns (`school_university`, `level_of_study`, etc.) to the `members` table.

## Step 5: Verify Setup

1.  Go to the **Table Editor** (icon on the left sidebar).
2.  Check that the `members` table exists and has the new columns.
3.  Check that the `events` table exists.

## Troubleshooting

- **RLS Policies**: If you encounter permission errors, check the Row Level Security (RLS) policies in the Authentication -> Policies section. The provided schema includes policies for public read/write access where appropriate.
- **Types**: If you change the database schema further, remember to update `src/lib/database.types.ts` to match.

You are now ready to use the application!
