export default function ProfileInfo() {
  return (
    <section className="flex flex-col items-center pt-6 pb-8">
      <div className="relative">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHaq9hImxrUzlvRTvy9F3ZANdY68lHRyurkTC6kishIQI_VMLYxIfq7fklVpND_vkh7U1XKRK8ZGHsurl00HE7uLGqp9-WtUTnwzsU18-gYfAnb4aKdXlk0787ED2FPSGwTUqUTlGRoYLq1kYyxcp4WIU4m5nrAaiaOTDcjzgGsiS8EfWZwwn5LeHbwzehkBCmNMNPjxCibzkdZCsrDx0btrABAZbXSXr9D6VzjsRZv7eeO95hkIqUM2y1rtz9_X5o8NPhxDesgxU"
          alt="Profile"
          className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-xl"
        />

        <span className="
          absolute bottom-1 right-1
          bg-primary text-white
          p-1.5 rounded-full
          border-2 border-white
        ">
          <span className="material-symbols-outlined text-sm">
            verified
          </span>
        </span>
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold">
          Daniel Diaz
        </h2>

        <p className="text-primary text-sm font-semibold uppercase tracking-widest mt-1">
          Quito Explorer
        </p>

        <div className="flex items-center justify-center gap-2 mt-2 text-gray-500 text-sm">
          <span className="material-symbols-outlined text-sm">
            calendar_today
          </span>
          <span>Miembro desde 2023</span>
        </div>
      </div>
    </section>
  )
}
