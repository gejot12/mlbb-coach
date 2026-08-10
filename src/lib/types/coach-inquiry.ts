export type CoachInquiryStatus = 'new' | 'contacted' | 'scheduled' | 'closed';

export interface CoachInquiry {
  id: string;
  name: string;
  contact: string;
  preferred_role: string | null;
  current_rank: string | null;
  desired_schedule: string;
  notes: string | null;
  status: CoachInquiryStatus;
  created_at: string;
}
