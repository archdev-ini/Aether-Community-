export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            members: {
                Row: {
                    id: string
                    aether_id: string
                    full_name: string
                    email: string
                    location: string
                    journey: string
                    experience: string
                    interests: string
                    contributions: string
                    school_university: string | null
                    level_of_study: string | null
                    portfolio_url: string | null
                    referral_source: string | null
                    newsletter_opt_in: boolean | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    aether_id: string
                    full_name: string
                    email: string
                    location?: string
                    journey?: string
                    experience?: string
                    interests?: string
                    contributions?: string
                    school_university?: string | null
                    level_of_study?: string | null
                    portfolio_url?: string | null
                    referral_source?: string | null
                    newsletter_opt_in?: boolean | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    aether_id?: string
                    full_name?: string
                    email?: string
                    location?: string
                    journey?: string
                    experience?: string
                    interests?: string
                    contributions?: string
                    school_university?: string | null
                    level_of_study?: string | null
                    portfolio_url?: string | null
                    referral_source?: string | null
                    newsletter_opt_in?: boolean | null
                    created_at?: string
                }
            }
            events: {
                Row: {
                    id: string
                    title: string
                    description: string
                    date: string
                    time: string
                    location: string
                    category: string
                    status: string
                    image_url: string | null
                    registration_url: string | null
                    event_code: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    description: string
                    date: string
                    time: string
                    location: string
                    category: string
                    status: string
                    image_url?: string | null
                    registration_url?: string | null
                    event_code?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    description?: string
                    date?: string
                    time?: string
                    location?: string
                    category?: string
                    status?: string
                    image_url?: string | null
                    registration_url?: string | null
                    event_code?: string | null
                    created_at?: string
                }
            }
        }
        Views: Record<string, never>
        Functions: Record<string, never>
        Enums: Record<string, never>
    }
}
