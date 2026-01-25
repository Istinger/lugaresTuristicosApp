export default function FavoritesFeatured() {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      <div
        className="relative aspect-[16/9] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDJXKXIew8XEADGuegNgC7O3dhxK81WeRHyvuhzJpm0JoTP-VXGp4wTQ9cha6-HD-lAsYw7BMBHTg7M8qfRsvOiqI1jxih1OC-zUXHkJ-3linvFDj0pwhX-A2520p58xq8-TsWelghEfXqM3v7BuopYrMkG1LBBUZytIsznw4sc2DWhwfeZRtl-P7-waW8A3IR4nEKpC31lFQUYORlUHerz2jXJJAAxms_1fxrPYL6JPyhVqhJT8LQEEdNHTMEAMweLB6wxd75W4o')",
        }}
      >
        <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full text-primary shadow-lg">
          <span className="material-symbols-outlined">favorite</span>
        </button>

        <span className="absolute bottom-4 left-4 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
          Patrimonio Cultural
        </span>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">
            La Compañía de Jesús
          </h3>
          <span className="flex items-center text-amber-500 text-sm font-bold">
            <span className="material-symbols-outlined text-sm">star</span>
            4.9
          </span>
        </div>

        <p className="text-[#577e8e] text-sm mt-1 mb-4">
          Centro Histórico • Iglesia Barroca
        </p>

        <button className="w-full bg-primary/10 text-primary font-bold py-2 rounded-lg flex items-center justify-center gap-2">
          Ver detalles
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  )
}
