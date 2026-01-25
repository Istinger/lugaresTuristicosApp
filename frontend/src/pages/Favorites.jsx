import FavoritesHeader from '../components/favorites/FavoritesHeader'
import FavoritesFilters from '../components/favorites/FavoritesFilters'
import FavoritesFeatured from '../components/favorites/FavoritesFeatured'
import FavoritesGrid from '../components/favorites/FavoritesGrid'
import FavoritesBottomNav from '../components/favorites/FavoritesBottomNav'

export default function Favorites() {
  return (
    <div
      className="
        min-h-screen
        w-full
        bg-[#fafafa]
        text-[#101619]
        font-display
        flex flex-col
        pb-24
      "
    >
      <FavoritesHeader />
      <FavoritesFilters />

      <main className="px-4 flex flex-col gap-4">
        <FavoritesFeatured />
        <FavoritesGrid />
      </main>

      <FavoritesBottomNav />
    </div>
  )
}
