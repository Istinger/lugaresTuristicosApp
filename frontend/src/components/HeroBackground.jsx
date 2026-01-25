export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div
        className="w-full h-full bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_s7eUs8RgUI4yqbPh_ZuVQ4EcjOrXANFUmI6uzDX8a-onzVv4s5gK7rnWELFJ_B06fZpgcpVVXDvQoRcNPrPnDJMBGdN_lqGlUhY_dmGO-X5dWmOpUYcSdMxXyWEvMqK1pVUT4rOU2haUxdl6CAy_tfOsKIld_4wZXvJDHpcDo49AGqN_dH4cI4zJ-ORkzh-NRCLLrertgARmMeREIDOSFBfl1iZyzMTnpQ9F6PtqRezVhJnAbj-DGbAYHnsJtw9mY9r-mg2x2MY")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>
    </div>
  )
}
