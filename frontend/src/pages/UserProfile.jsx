import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileInfo from '../components/profile/ProfileInfo'
import ProfileActivity from '../components/profile/ProfileActivity'
import ProfileSupport from '../components/profile/ProfileSupport'
import ProfileLogout from '../components/profile/ProfileLogout'
import ProfileBottomNav from '../components/profile/ProfileBottomNav'

export default function UserProfile() {
  return (
    <div className="
      min-h-screen
      w-full
      bg-[#f9fafa]
      text-[#101819]
      font-display
      flex flex-col
      pb-28
    ">
      <ProfileHeader />

      <main className="flex-1 px-4">
        <ProfileInfo />
        <ProfileActivity />
        <ProfileSupport />
        <ProfileLogout />
      </main>

      <ProfileBottomNav />
    </div>
  )
}
