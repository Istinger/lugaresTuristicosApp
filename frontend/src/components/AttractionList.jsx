import AttractionCard from './AttractionCard'

export default function AttractionList() {
  return (
    <main className="flex flex-col gap-3 px-4">
      <AttractionCard
        title="Basilica del Voto Nacional"
        subtitle="1.2 km away • Gothic Revival"
        description="Stunning neo-Gothic church with panoramic tower views."
        price="$$"
        rating="4.8"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAT9Gm6GtQfWA-1ulr0m0Kv1-hytOWZRmmsJhGyurnaxTArMkL0yuML8ZKoL-DwHVHOnuwLEm4yZGK6BUwNEJTWJ1gHfkO5BDcmfZ6Pd3jm-i7GMabSvu0-gUigFPkMz6cR9dFds-J-e1K9wXwpqj85KtNhyZH4ZtQgHyTaZFLrIJBHKWq4FBDjiAJ9_MoABJLlR4YxIqTA2d3nsyCcaA44jDA5YnGOlId5tJhhLAzLnGQAnKa2OLMUnqbFrk_v8yR2C4Ozzz2pNfo"
      />

      <AttractionCard
        title="Plaza Grande"
        subtitle="0.5 km away • Historic Center"
        description="The social and political heart of the city's old town."
        price="Free"
        rating="4.7"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDS4dvT7f1tI-6Xea52yjyZZ9tBWja7_XJ7ZQRDY7MpSx6pJlcMUkBex_AB_eKYy9L0fkvhmKFVmMdDdzCV3kFI0IBsmX9ZV3fZmZ2RQUSK8RVL8DMhRgb_VUUtqgb82QBDdkraFl3i7XO-fnz2Tq1mxBhlFqbVPvm4PHAuZnOIkixYW1dmJd50RB8GUdRyb0iTwVKW9w6pQqyRviS0wL8stxgy_2kTrQW8KvPcDBCcKlZTurx48VvHCFqE54eOfwzgcmDLopi1UXg"
      />
    </main>
  )
}
