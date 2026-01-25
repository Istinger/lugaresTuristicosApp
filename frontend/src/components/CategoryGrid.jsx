export default function CategoryGrid() {
  return (
    <section className="px-6">
      <div className="flex justify-between items-center pt-4 pb-2">
        <h2 className="font-editorial text-xl font-bold">
          Explore the Andes
        </h2>
        <button className="text-primary text-sm font-semibold">
          See All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 py-4">
        <CategoryCard
          title="Centro Histórico"
          subtitle="Colonial architecture & plazas"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBAHz7azd3MnJkbGYzKRWGcxLIPZofyW48v0uSF8apz1ozT-yB5kJ57Vzf-XTN56HZ4mOyVJt4PQOPOb_JN5HSXqoXxom5i31eFR6J_WKW-5nfEXINa8SYEkoUj7GASGDdxRxRGI1-YtSig2l9NfMO1sHxQ2tQRZ4zI988dFSZSpirhMO99BpoaJpd_UwCtiMsBEbvXFu3VQxnqNrKa7Y0ta9Zl6B3Q8n0clM4YNET0AjrVCoYG3gatJflhTcA2pFakF8OO7-wYdaI"
          large
        />

        <CategoryCard
          title="Gastronomía"
          subtitle="Local flavors"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDRwN1XMXYi4p6ae5BAg2Yq0f9IyRAcQL9skarq26HLbGPQI85EWFTC0xiyIgE4STZic-FsUPivkY3IXiOvQ5MZZ8MIH6n20PW20LpcRu1VhoEluGNhBaRdQjWWrlvg29FSrBug-O96TJ335PzH0YZBMM4do0KUnhqmuDciWclJfqcjHt0RYsWrltLMiCNrzxF682UO-yec73OmKpM0zTI7X9UAPNSkw9i1419K_dCzgdca1d7FNb68q8EWDjnWwFpd8xp4AF1YKj0"
        />
      </div>
    </section>
  )
}

function CategoryCard({ title, subtitle, image, large }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-xl shadow-md
        ${large ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}
      `}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,.8)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="font-editorial font-bold">
          {title}
        </h3>
        <p className="text-xs opacity-90">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
