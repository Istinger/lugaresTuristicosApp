import BottomNav from "../components/BottomNax";
import CategoryGrid from "../components/CategoryGrid";
import DashboardHeader from "../components/DashboardHeader";
import MapCard from "../components/MapCard";
import QuickStats from "../components/QuickStats";
import SearchBar from "../components/SearchBar";


export default function TouristDashboard() {
  return (
    <div className="min-h-screen bg-[#fbfaf9] text-[#101819] pb-28 font-display">
      <DashboardHeader/>
      <SearchBar/>
      <CategoryGrid/>
      <QuickStats/>
      <MapCard/>
      <BottomNav/>
    </div>
  )
}
