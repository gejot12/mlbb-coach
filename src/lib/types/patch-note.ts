export type PatchNoteChangeType = 'hero_buff' | 'hero_nerf' | 'hero_adjust' | 'item_change' | 'system_change';

export interface PatchNoteChange {
  id: string;
  patch_note_id: string;
  change_type: PatchNoteChangeType;
  subject_name: string;
  subject_slug: string | null;
  description: string;
  sort_order: number;
}

export interface PatchNote {
  id: string;
  version: string;
  release_date: string;
  title: string | null;
  summary: string | null;
  source_url: string | null;
  source: 'manual' | 'scraper';
  created_at: string;
  updated_at: string;
}

export interface PatchNoteWithChanges extends PatchNote {
  patch_note_changes: PatchNoteChange[];
}
