export default function ExploreHeader() {
  return (
    <header className="
      sticky top-0 z-20
      bg-[#fafaf9]/95
      backdrop-blur
    ">
      <div className="flex items-center justify-between px-4 py-3">
        <button className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>

        <h1 className="text-lg font-bold">
          Quito Discovery
        </h1>

        <button className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>
    </header>
  )
}
