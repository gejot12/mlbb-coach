import type { SessionSlot } from '@/data/coach-session-slots';

export type CoachInquiryStatus = 'new' | 'contacted' | 'scheduled' | 'closed';

export interface CoachInquiry {
  id: string;
  name: string;
  contact: string;
  preferred_role: string | null;
  current_rank: string | null;
  session_date: string;
  session_slot: SessionSlot;
  desired_schedule: string;
  notes: string | null;
  status: CoachInquiryStatus;
  created_at: string;
}

export interface SessionSlotCount {
  session_date: string;
  session_slot: SessionSlot;
  booked_count: number;
}
