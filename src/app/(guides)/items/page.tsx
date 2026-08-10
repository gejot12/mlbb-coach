import type { Metadata } from "next";
import { ItemList } from "@/components/heroes/item-list";

export const metadata: Metadata = {
  title: "Item — MLBB Coach",
  description: "Penjelasan katalog item Mobile Legends per kategori.",
};

export default function ItemsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Item</h1>
      <p className="mt-2 max-w-2xl text-foreground-muted">
        Tiap hero punya 6 slot item + 1 slot battle spell. Item dibeli lewat toko, sebagian besar butuh
        &ldquo;bahan&rdquo; item lebih murah dulu sebelum jadi item lengkap — beli bahan yang paling relevan
        duluan sesuai kebutuhan (damage, defense, atau mobility) daripada langsung nabung ke item termahal.
      </p>

      <div className="mt-8">
        <ItemList />
      </div>
    </div>
  );
}
