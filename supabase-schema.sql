-- Supabase Database Schema for Aether Community

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Members Table
CREATE TABLE IF NOT EXISTS members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  aether_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  location TEXT NOT NULL,
  journey TEXT NOT NULL,
  experience TEXT NOT NULL,
  interests TEXT NOT NULL,
  contributions TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Events Table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  location TEXT NOT NULL,
  category TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('Upcoming', 'Past')),
  image_url TEXT,
  registration_url TEXT,
  event_code TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_members_email ON members(email);
CREATE INDEX IF NOT EXISTS idx_members_aether_id ON members(aether_id);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(date DESC);
CREATE INDEX IF NOT EXISTS idx_events_category ON events(category);
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);

-- Row Level Security (RLS) Policies

-- Enable RLS
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Members Policies
-- Allow anyone to insert (public registration)
CREATE POLICY "Allow public member registration"
  ON members FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow public read (for future admin dashboard)
CREATE POLICY "Allow public member read"
  ON members FOR SELECT
  TO anon, authenticated
  USING (true);

-- Events Policies
-- Allow public read
CREATE POLICY "Allow public event read"
  ON events FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can insert events (future admin feature)
CREATE POLICY "Allow authenticated event insert"
  ON events FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update events
CREATE POLICY "Allow authenticated event update"
  ON events FOR UPDATE
  TO authenticated
  USING (true);
