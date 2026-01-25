export default function FavoritesHeader() {
  return (
    <header
      className="
        sticky top-0 z-20
        bg-[#fafafa]/95
        backdrop-blur
        border-b border-gray-200
        px-4 py-4
        flex items-center justify-between
      "
    >
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-2xl">
          travel_explore
        </span>
        <h1 className="text-xl font-bold">Mis Favoritos</h1>
      </div>
    </header>
  )
}
