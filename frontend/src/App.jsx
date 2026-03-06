import React from 'react'
import {Route, Routes} from "react-router"
import HomePage from "./pages/HomePage"
import CreateDonationPage from "./pages/CreateDonationPage"
import DonationDetailPage from "./pages/DonationDetailPage"
const App = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreateDonationPage/>}/>
        <Route path="/donations/:id" element={<DonationDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App