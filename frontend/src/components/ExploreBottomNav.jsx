export default function ExploreBottomNav() {
  return (
    <nav className="
      fixed bottom-0 left-0 right-0
      bg-white/95
      backdrop-blur
      border-t border-gray-100
      flex justify-around
      py-2
      z-30
    ">
      <NavItem icon="explore" label="Explorar" active />
      <NavItem icon="map" label="Mapa" />
      <CenterButton />
      <NavItem icon="favorite" label="Guardados" />
      <NavItem icon="calendar_today" label="Viajes" />
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
      <span className="text-[10px] font-bold">
        {label}
      </span>
    </button>
  )
}

function CenterButton() {
  return (
    <button className="
      relative -top-6
      w-14 h-14
      bg-primary
      text-white
      rounded-full
      shadow-xl
      flex items-center justify-center
    ">
      <span className="material-symbols-outlined text-3xl">
        add
      </span>
    </button>
  )
}
