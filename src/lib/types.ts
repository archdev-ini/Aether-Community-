import { Database } from './database.types';

export type Member = Database['public']['Tables']['members']['Row'];
export type MemberInsert = Database['public']['Tables']['members']['Insert'];
export type Event = Database['public']['Tables']['events']['Row'];
export type EventInsert = Database['public']['Tables']['events']['Insert'];
