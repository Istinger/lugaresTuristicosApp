import FavoriteCard from './FavoriteCard'

export default function FavoritesGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FavoriteCard
        title="Parque Metropolitano"
        category="Abierto ahora"
        location="Norte de Quito"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAa04BB_OqSaid9uTqKxuNulJ6maVKCEr0BxcfzWA481i0bZ6_rcFraoK6u-HNvxBIU7ADq6wYOiJ53iYtMisU6i1mBcpnqs1J4eNeW47MY12qcx5wZQ7joV8pCJGtjMbOq4W_erUf-0pNMQDPW0uIrvro0mb5K3yJu1xcqbNka9pCJckjvZTZ5pUslyK20lSprpZSqUcck_IvYe-7R2TDvYXJeML_1F8KdtZ6ZfiG5LQfXcXPrimRriHAawokgjJMuJ0QOCXWr-ZY"
      />

      <FavoriteCard
        title="TelefériQo Quito"
        category="Aventura"
        location="Volcán Pichincha"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBK3AbL0IOUFIJLJiGA2q_wVZJHEhSfy-V8ollgCaXyjzLtXk3ROCd_4u0s9MUmnB1vsxwErISs2zMywL5plwHYZn_mg5VGTBsaIGkM7r1DLk3ZCMpronRJRCmcb4XLxN4eSHMZ795ZOSKcsQiADeMemb0erfswmtA4RnpGVfbfQiz7oaA3GDdHvyiUxWg17MJNuKdfw8wyrcC7Th-WejK4ZVgvcUb0UdTWAG4XQ9cCG6Pt89jBFQ8A-sgsSBPF4LtA_dkKDjGM2IY"
      />
    </div>
  )
}
