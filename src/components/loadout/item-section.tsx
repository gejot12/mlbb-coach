import { ItemList } from "@/components/heroes/item-list";

export function ItemSection() {
  return (
    <div>
      <p className="max-w-2xl text-foreground-muted">
        Tiap hero punya 6 slot item + 1 slot battle spell. Item dibeli lewat toko, sebagian besar
        butuh &ldquo;bahan&rdquo; item lebih murah dulu sebelum jadi item lengkap — beli bahan yang
        paling relevan duluan sesuai kebutuhan (damage, defense, atau mobility) daripada langsung
        nabung ke item termahal.
      </p>
      <div className="mt-6">
        <ItemList />
      </div>
    </div>
  );
}
