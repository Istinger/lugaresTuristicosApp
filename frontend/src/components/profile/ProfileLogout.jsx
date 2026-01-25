export default function ProfileLogout() {
  return (
    <section className="mt-10 mb-6">
      <button className="
        w-full flex items-center justify-center gap-2
        py-4 px-4
        rounded-xl
        border-2 border-red-100
        text-red-500
        font-bold
        hover:bg-red-50
        transition-colors
      ">
        <span className="material-symbols-outlined">
          logout
        </span>
        <span>Cerrar Sesión</span>
      </button>

      <p className="text-center text-xs text-gray-400 mt-6 italic">
        Quito Explorer App v2.4.0
      </p>
    </section>
  )
}
