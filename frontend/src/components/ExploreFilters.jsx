export default function ExploreFilters() {
  return (
    <div className="
      flex gap-2
      px-4 py-3
      overflow-x-auto
      whitespace-nowrap
    ">
      <FilterChip label="Distance" active />
      <FilterChip label="Price" />
      <FilterChip label="Cultural" />
      <FilterChip label="Nature" />
    </div>
  )
}

function FilterChip({ label, active }) {
  return (
    <button
      className={`
        h-9 px-4 rounded-full shrink-0 text-sm font-medium
        ${active
          ? 'bg-primary text-white shadow-md'
          : 'bg-white border border-gray-200 text-[#101619]'}
      `}
    >
      {label}
    </button>
  )
}
