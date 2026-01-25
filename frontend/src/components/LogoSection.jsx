export default function LogoSection() {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="relative mb-4">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white border-4 border-accent-gold/50">
          <span className="material-symbols-outlined text-4xl">wb_sunny</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-white border-2 border-white">
          <span className="material-symbols-outlined text-sm">explore</span>
        </div>
      </div>

      <h2 className="text-white font-heading font-extrabold tracking-[0.2em] uppercase">
        Explora Quito
      </h2>
    </div>
  )
}
