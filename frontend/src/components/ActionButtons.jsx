import { Link } from 'react-router-dom'

export default function ActionButtons() {
  return (
    <div className="flex flex-col gap-4">
      {/* Explorar */}
      <Link
        to="/explore"
        className="bg-primary/10 text-primary h-14 rounded-lg font-bold border border-primary/20 flex items-center justify-center"
      >
        Explorar
        <span className="material-symbols-outlined">arrow_forward</span>
      </Link>

      {/* Login */}
      <Link
        to="/login"
        className="bg-primary/10 text-primary h-14 rounded-lg font-bold border border-primary/20 flex items-center justify-center"
      >
        Iniciar Sesión
      </Link>
    </div>
  )
}
