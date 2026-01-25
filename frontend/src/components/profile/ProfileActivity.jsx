export default function ProfileActivity() {
  return (
    <section className="space-y-4">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
        Mi Actividad
      </h3>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
        <ActivityItem icon="calendar_month" label="Mis Reservas" />
        <Divider />
        <ActivityItem icon="favorite" label="Lugares Guardados" />
        <Divider />
        <ActivityItem icon="map" label="Rutas Recorridas" />
      </div>
    </section>
  )
}

function ActivityItem({ icon, label }) {
  return (
    <button className="
      w-full flex items-center gap-4
      px-4 py-4
      hover:bg-gray-50
      transition-colors
      group
    ">
      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
        <span className="material-symbols-outlined">
          {icon}
        </span>
      </div>

      <span className="flex-1 text-left font-medium">
        {label}
      </span>

      <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform">
        chevron_right
      </span>
    </button>
  )
}

function Divider() {
  return <div className="h-px bg-gray-100 mx-4" />
}
