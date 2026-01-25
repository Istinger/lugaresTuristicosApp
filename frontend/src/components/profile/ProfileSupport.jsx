export default function ProfileSupport() {
  return (
    <section className="space-y-4 mt-8">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
        Ayuda y Soporte
      </h3>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
        <button className="
          w-full flex items-center gap-4
          px-4 py-4
          hover:bg-gray-50
          transition-colors
          group
        ">
          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600">
            <span className="material-symbols-outlined">
              help
            </span>
          </div>

          <span className="flex-1 text-left font-medium">
            Centro de Ayuda
          </span>

          <span className="material-symbols-outlined text-gray-400 group-hover:translate-x-1 transition-transform">
            chevron_right
          </span>
        </button>
      </div>
    </section>
  )
}
