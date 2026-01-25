import ExploreHeader from '../components/ExploreHeader'
import ExploreSearch from '../components/ExploreSearch'
import ExploreFilters from '../components/ExploreFilters'
import AttractionList from '../components/AttractionList'
import ExploreBottomNav from '../components/ExploreBottomNav'

export default function Explore() {
    return (
        <div className=" min-h-screen w-full bg-[#fafaf9] text-[#101619] font-display flex flex-col pb-24">
            <ExploreHeader />
            <ExploreSearch />
            <ExploreFilters />
            <AttractionList />
            <ExploreBottomNav />
        </div>
    )
}
