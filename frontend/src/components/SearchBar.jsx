export default function SearchBar() {
  return (
    <section className="px-6 py-4">
      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
          search
        </span>

        <input
          type="text"
          placeholder="Find your next adventure..."
          className="
            w-full h-14 pl-12 pr-4
            rounded-xl
            bg-white
            border border-gray-200
            shadow-sm
            placeholder:text-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-primary/30
          "
        />
      </div>
    </section>
  )
}
