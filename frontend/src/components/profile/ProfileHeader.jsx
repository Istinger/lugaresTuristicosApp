export default function ProfileHeader() {
  return (
    <header className="
      sticky top-0 z-20
      bg-[#f9fafa]/95
      backdrop-blur
    ">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="material-symbols-outlined cursor-pointer">
          settings
        </span>

        <h1 className="text-lg font-bold">
          Perfil
        </h1>

        <button className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined cursor-pointer">
            edit
          </span>
        </button>
      </div>
    </header>
  )
}
