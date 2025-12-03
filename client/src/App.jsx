import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Listing from './pages/Listing'
import Blog from './pages/Blog'
import  Contact  from './pages/Contact'
import PropertyDetails from './pages/PropertyDetails'
import MyBookings from './pages/MyBookings'
import AgencyReg  from './components/AgencyReg'
import { useAppContext } from './context/useAppContext'
import Sidebar from './components/owner/Sidebar.jsx'
 import Dashboard from './pages/owner/Dashboard.jsx'
 import AddProperty from './pages/owner/AddProperty.jsx'
 import ListProperty from './pages/owner/ListProperty.jsx'


const App = () => {
  const location = useLocation()
  const isOwnerPath = location.pathname.includes('owner')
  const { showAgencyReg } = useAppContext()

  return ( 
    <main>
     {!isOwnerPath && <Header/>}
     {!showAgencyReg && <AgencyReg /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<PropertyDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/owner" element={<Sidebar />} />
        <Route path='/owner/dashboard'  element={<Dashboard />} /> 
       <Route path='/owner/add-property' element={<AddProperty />} />
        <Route path='/owner/list-property' element={<ListProperty />} /> 
       
      </Routes>
      {!isOwnerPath && <Footer />}
    </main>
  )
}

export default App


