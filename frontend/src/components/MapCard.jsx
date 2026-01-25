export default function MapCard() {
  return (
    <section className="px-6 py-6">
      <div className="h-32 w-full rounded-2xl bg-[#e9f0f1] flex items-center justify-center shadow-inner">
        <button className="bg-primary text-black px-5 py-2 rounded-full font-semibold flex items-center gap-2 shadow-md">
          <span className="material-symbols-outlined">near_me</span>
          Explore Nearby
        </button>
      </div>
    </section>
  )
}
