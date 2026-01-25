export default function ProfileBottomNav() {
  return (
    <nav className="
      fixed bottom-0 left-0 right-0
      bg-white/95
      backdrop-blur
      border-t border-gray-100
      px-6 py-3
      z-30
    ">
      <div className="flex items-center justify-between">
        <NavItem icon="explore" label="Explorar" />
        <NavItem icon="search" label="Buscar" />
        <NavItem icon="local_activity" label="Tours" />
        <NavItem icon="person" label="Perfil" active />
      </div>
    </nav>
  )
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`flex flex-col items-center gap-1 ${
        active ? 'text-primary' : 'text-gray-400'
      }`}
    >
      <span className="material-symbols-outlined">
        {icon}
      </span>
      <span className="text-[10px] font-bold uppercase tracking-widest">
        {label}
      </span>
    </button>
  )
}
