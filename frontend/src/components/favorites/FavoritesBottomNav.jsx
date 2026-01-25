export default function FavoritesBottomNav() {
  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0
        bg-white/95
        backdrop-blur
        border-t border-gray-200
        px-6 py-3
        flex justify-between
        z-30
      "
    >
      <NavItem icon="explore" label="Explorar" />
      <NavItem icon="favorite" label="Favoritos" active />
      <CenterButton />
      <NavItem icon="confirmation_number" label="Tickets" />
      <NavItem icon="person" label="Perfil" />
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
      <span className="material-symbols-outlined">{icon}</span>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  )
}

function CenterButton() {
  return (
    <button className="relative -top-6 bg-primary text-white p-4 rounded-full shadow-lg">
      <span className="material-symbols-outlined text-2xl">map</span>
    </button>
  )
}
