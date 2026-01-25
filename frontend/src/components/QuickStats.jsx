export default function QuickStats() {
  return (
    <section className="flex gap-3 px-6 py-4 overflow-x-auto">
      <StatChip icon="map" label="City Guide PDF" />
      <StatChip icon="currency_exchange" label="USD Converter" />
      <StatChip icon="event" label="Local Festivals" />
    </section>
  )
}

function StatChip({ icon, label }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
      <span className="material-symbols-outlined text-primary">
        {icon}
      </span>
      <span className="text-xs font-bold whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}
