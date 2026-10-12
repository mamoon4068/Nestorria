<<<<<<< HEAD
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { UserProfile } from '@clerk/clerk-react'
=======
import { Route, Routes, useLocation } from 'react-router-dom'
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
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
<<<<<<< HEAD
import Dashboard from './pages/owner/Dashboard.jsx'
import AddProperty from './pages/owner/AddProperty.jsx'
import ListProperty from './pages/owner/ListProperty.jsx'

=======
 import Dashboard from './pages/owner/Dashboard.jsx'
 import AddProperty from './pages/owner/AddProperty.jsx'
 import ListProperty from './pages/owner/ListProperty.jsx'
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70


const App = () => {
  const location = useLocation()
  const isOwnerPath = location.pathname.includes('owner')
  const { showAgencyReg } = useAppContext()

  return ( 
    <main>
     {!isOwnerPath && <Header/>}
<<<<<<< HEAD
     {showAgencyReg && <AgencyReg />}

=======
     {!showAgencyReg && <AgencyReg /> }
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing/:id" element={<PropertyDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-bookings" element={<MyBookings />} />
<<<<<<< HEAD
        <Route path="/owner" element={<Sidebar />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-property" element={<AddProperty />} />
          <Route path="list-property" element={<ListProperty />} />
        </Route>



        <Route path="/profile" element={<UserProfile />} />
        
=======
        <Route path="/owner" element={<Sidebar />} />
        <Route path='/owner/dashboard'  element={<Dashboard />} /> 
       <Route path='/owner/add-property' element={<AddProperty />} />
        <Route path='/owner/list-property' element={<ListProperty />} /> 
>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
       
      </Routes>
      {!isOwnerPath && <Footer />}
    </main>
  )
}

export default App
<<<<<<< HEAD
=======


>>>>>>> cace4f0542e8dd1bf9975b659f53b668c525da70
