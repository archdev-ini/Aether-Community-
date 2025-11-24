'use server'

import { createServerClient } from './supabase'
import { MemberInsert, Event, EventInsert, Member } from './types'

/**
 * Generate a unique Aether ID for new members
 * Format: AET-YYYY-XXXX (e.g., AET-2025-1234)
 */
export async function generateAetherId(): Promise<string> {
    const supabase = createServerClient()

    const year = new Date().getFullYear()
    // Generate random 4-digit number
    const randomNum = Math.floor(1000 + Math.random() * 9000)
    const aetherId = `AET-${year}-${randomNum}`

    // Check if ID already exists
    // @ts-ignore
    const { data } = await supabase
        .from('members')
        .select('aether_id')
        .eq('aether_id', aetherId)
        .single() as any

    // If exists, generate a new one recursively
    if (data) {
        return generateAetherId()
    }

    return aetherId
}

/**
 * Create a new member
 */
export async function createMember(memberData: Omit<MemberInsert, 'id' | 'aether_id' | 'created_at'>): Promise<{ success: boolean; error?: string; aetherId?: string }> {
    try {
        const supabase = createServerClient()
        const aetherId = await generateAetherId()

        // @ts-ignore
        const { error } = await supabase
            .from('members')
            .insert({
                ...memberData,
                aether_id: aetherId,
            } as any)

        if (error) {
            console.error('Failed to create member:', error)
            return { success: false, error: error.message }
        }

        return { success: true, aetherId }
    } catch (error) {
        console.error('Failed to create member:', error)
        return { success: false, error: 'An unexpected error occurred' }
    }
}

/**
 * Get all events with optional category filtering
 */
export async function getEvents(category?: string): Promise<Event[]> {
    try {
        const supabase = createServerClient()

        let query = supabase
            .from('events')
            .select('*')
            .order('date', { ascending: false })

        if (category && category !== 'All') {
            query = query.eq('category', category)
        }

        // @ts-ignore
        const { data, error } = await query

        if (error) {
            console.error('Failed to fetch events:', error)
            return []
        }

        return data || []
    } catch (error) {
        console.error('Failed to fetch events:', error)
        return []
    }
}

/**
 * Get a single event by ID
 */
export async function getEventById(id: string): Promise<Event | null> {
    try {
        const supabase = createServerClient()

        // @ts-ignore
        const { data, error } = await supabase
            .from('events')
            .select('*')
            .eq('id', id)
            .single() as any

        if (error) {
            console.error(`Failed to fetch event ${id}:`, error)
            return null
        }

        return data
    } catch (error) {
        console.error(`Failed to fetch event ${id}:`, error)
        return null
    }
}

/**
 * Create a new event
 */
export async function createEvent(eventData: Omit<EventInsert, 'id' | 'created_at'>): Promise<{ success: boolean; error?: string; eventId?: string }> {
    try {
        const supabase = createServerClient()

        // @ts-ignore
        const { data, error } = await supabase
            .from('events')
            .insert(eventData as any)
            .select('id')
            .single() as any

        if (error) {
            console.error('Failed to create event:', error)
            return { success: false, error: error.message }
        }

        return { success: true, eventId: data.id }
    } catch (error) {
        console.error('Failed to create event:', error)
        return { success: false, error: 'An unexpected error occurred' }
    }
}

/**
 * Get all members (for future admin dashboard)
 */
export async function getMembers(): Promise<Member[]> {
    try {
        const supabase = createServerClient()

        // @ts-ignore
        const { data, error } = await supabase
            .from('members')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Failed to fetch members:', error)
            return []
        }

        return data || []
    } catch (error) {
        console.error('Failed to fetch members:', error)
        return []
    }
}
