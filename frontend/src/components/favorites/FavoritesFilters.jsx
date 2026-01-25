export default function FavoritesFilters() {
  return (
    <div className="flex gap-3 px-4 py-4 overflow-x-auto">
      <FilterChip label="Todo" active />
      <FilterChip label="Iglesias" icon="church" />
      <FilterChip label="Parques" icon="park" />
      <FilterChip label="Museos" icon="museum" />
    </div>
  )
}

function FilterChip({ label, icon, active }) {
  return (
    <button
      className={`
        flex items-center gap-2
        h-10 px-5
        rounded-full
        shrink-0
        text-sm font-semibold
        ${
          active
            ? 'bg-primary text-white shadow-sm'
            : 'bg-white border border-gray-100 text-[#101619]'
        }
      `}
    >
      {icon && (
        <span className="material-symbols-outlined text-[18px]">
          {icon}
        </span>
      )}
      {label}
    </button>
  )
}
