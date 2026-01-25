import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import TouristDashboard from './pages/TouristDashboard'
import Explore from './pages/Explore'
import UserProfile from './pages/UserProfile'
import Favorites from './pages/Favorites'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/touristd' element={<TouristDashboard />} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/user' element={<UserProfile/>} />
        <Route path='/fav' element={<Favorites/>} />
      </Routes>
    </div>
  )
}

export default App
