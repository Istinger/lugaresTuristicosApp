export default function FavoriteCard({ title, category, location, image }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      <div
        className="relative aspect-square bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-primary">
          <span className="material-symbols-outlined text-[18px]">
            favorite
          </span>
        </button>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <p className="text-[10px] font-bold text-primary uppercase mb-1">
          {category}
        </p>
        <h4 className="text-sm font-bold line-clamp-1">
          {title}
        </h4>
        <p className="text-xs text-[#577e8e] mt-1 mb-3">
          {location}
        </p>

        <button className="mt-auto text-xs font-bold text-primary flex items-center">
          Explorar
          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  )
}
