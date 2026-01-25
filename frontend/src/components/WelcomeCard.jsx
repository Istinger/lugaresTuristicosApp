import ActionButtons from './ActionButtons'

export default function WelcomeCard() {
  return (
    <div className="w-full px-6 mb-8 max-w-[480px]">
      <div className="glass-effect p-8 rounded-xl shadow-2xl relative overflow-hidden bg-white/90">
        <div className="absolute inset-0 andean-pattern" />

        <div className="relative z-10 text-center">
          <h1 className="text-black font-heading text-4xl font-extrabold">
            Bienvenido a Quito
          </h1>

          <p className="text-gray-700 text-lg mt-4 mb-8">
            Explora la cultural corazón de los Andes y la Mitad del Mundo.
          </p>

          <ActionButtons />
        </div>
      </div>
    </div>
  )
}
