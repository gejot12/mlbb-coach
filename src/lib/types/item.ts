export type ItemCategory = 'attack' | 'magic' | 'defense' | 'movement' | 'jungle' | 'roam';

export interface Item {
  slug: string;
  name: string;
  category: ItemCategory;
  price: number;
  effect: string;
}
