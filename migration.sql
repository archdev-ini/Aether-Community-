-- Migration to update members table for new Join Form
ALTER TABLE members
ADD COLUMN IF NOT EXISTS school_university TEXT,
ADD COLUMN IF NOT EXISTS level_of_study TEXT,
ADD COLUMN IF NOT EXISTS portfolio_url TEXT,
ADD COLUMN IF NOT EXISTS referral_source TEXT,
ADD COLUMN IF NOT EXISTS newsletter_opt_in BOOLEAN DEFAULT FALSE;

-- Rename columns if necessary or just add new ones and ignore old ones for now
-- We will use the new columns in the application
