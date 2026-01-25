export default function AttractionCard({
  title,
  subtitle,
  description,
  price,
  rating,
  image,
}) {
  return (
    <div className="
      flex flex-col
      bg-white
      rounded-xl
      border border-gray-100
      shadow-md
      overflow-hidden
    ">
      <div
        className="relative w-full aspect-[16/10] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="
          absolute top-3 right-3
          bg-white rounded-full
          px-2 py-1
          flex items-center gap-1
          shadow-sm
        ">
          <span className="material-symbols-outlined text-[16px] text-[#B86B47]">
            star
          </span>
          <span className="text-xs font-bold">
            {rating}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-lg leading-tight">
              {title}
            </h3>
            <p className="text-sm text-gray-500">
              {subtitle}
            </p>
          </div>
          <span className="text-primary font-bold text-sm">
            {price}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 max-w-[70%]">
            {description}
          </p>
          <button className="
            h-10 px-5
            bg-primary
            text-white
            text-sm font-bold
            rounded-xl
            active:scale-95
          ">
            Explore
          </button>
        </div>
      </div>
    </div>
  )
}
