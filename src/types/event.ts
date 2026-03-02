// ==========================================
// Event Types
// ==========================================

export type EventScope = 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
export type EventStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED';
export type EventStatusReason = 'PENDING_EVALUATION' | 'APPROVED' | 'REJECTED' | 'CANCELLED_BY_OWNER' | 'CANCELLED_BY_ADMIN';
export type EventType = 'race' | 'concert' | 'conference' | 'workshop' | 'festival' | 'sports' | 'other';
export type TicketAccess = 'FREE' | 'PAID' | 'INVITE_ONLY';

export interface EventMedia {
  imgs: string[];
  videos: string[];
  url: string;
}

export interface EventSchedule {
  timezone: string;
  date_start: string; // ISO Date string
  date_end: string;   // ISO Date string
}

export interface SocialMedia {
  instagram?: string;
  facebook?: string;
  pinterest?: string;
  x?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  name: string;
  img: string;
  social: SocialMedia;
}

export interface TicketAvailability {
  timezone: string;
  date_start: string; // ISO Date string
  date_end: string;   // ISO Date string
}

export interface EventTicket {
  access: TicketAccess;
  currency?: string;
  amount?: number;
  url?: string;
  contact: ContactInfo;
  availability: TicketAvailability;
  beneficiary: ContactInfo;
}

export interface EventDetail {
  distance?: number;
  unit?: string;
  laps?: number;
  [key: string]: any; // Para permitir otros campos específicos según tipo de evento
}

export interface Event {
  _id: string;
  is_active: boolean;
  is_verified: boolean;
  views: number;
  scope: EventScope;
  status: EventStatus;
  status_reason: EventStatusReason;
  type: EventType;
  title: string;
  subtitle: string;
  media: EventMedia;
  description: string;
  tags: string[];
  owner_id: string;
  parent_id?: string;
  location_id: string;
  schedule: EventSchedule;
  ticket: EventTicket;
  detail?: EventDetail;
  date_created: string;  // ISO Date string
  last_updated: string;  // ISO Date string
}
