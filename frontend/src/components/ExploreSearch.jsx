export default function ExploreSearch() {
  return (
    <div className="px-4 py-2 flex">
      <div className="
        flex items-center
        w-full h-12
        rounded-xl
        border border-gray-200
        bg-white
        shadow-sm
      ">
        <span className="material-symbols-outlined px-4 text-primary">
          search
        </span>

        <input
          type="text"
          placeholder="Search landmarks in Quito..."
          className="
            flex-1
            h-full
            text-sm
            placeholder:text-gray-400
            focus:outline-none
          "
        />
      </div>
    </div>
  )
}
