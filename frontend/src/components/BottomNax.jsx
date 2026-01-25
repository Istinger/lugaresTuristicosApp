export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex justify-between max-w-lg mx-auto">
        <NavItem icon="home" label="Inicio" active />
        <NavItem icon="explore" label="Descubrir" />
        <NavItem icon="map" label="Mapa" center />
        <NavItem icon="favorite" label="Favoritos" />
        <NavItem icon="person" label="Perfil" />
      </div>
    </nav>
  )
}

function NavItem({ icon, label, active, center }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${active ? 'text-primary' : 'opacity-40'}`}>
      <span className={`material-symbols-outlined ${center ? 'text-white bg-primary rounded-full p-3 -mt-6 shadow-lg' : ''}`}>
        {icon}
      </span>
      <span className="text-[10px] font-bold">
        {label}
      </span>
    </div>
  )
}
