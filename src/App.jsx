import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppointmentBookings from './pages/AppointmentBookings';
import Dashboard from './pages/Dashboard';
import SingleProperty from './pages/SingleProperty';
import AdminCreateProperties from './pages/AdminCreateProperties';
import AdminPropertiesStatus from './pages/AdminPropertiesStatus';
import ApprovePropertyStatus from './pages/ApprovePropertyStatus';
import PropertyPage from '../PropertyPage-admin';
import ViewWishlist from './pages/ViewWishlist';
import Admin from './pages/Admin';
import NewUser from './pages/NewUser';
import CreateAgent from './pages/CreateAgent';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />}/>
        {/* <Route path="/dashboard" element={<Dashboard />}/> */}

        <Route path="/appointments" element={<AppointmentBookings />}/>
        <Route path="/single-property" element={<SingleProperty />}/>
        <Route path="/create-properties" element={<AdminCreateProperties />}/>

        <Route path="/create-user" element={<NewUser />}/>
        <Route path="/create-agent" element={<CreateAgent />}/>


        <Route path="/view-properties"  element={<PropertyPage />}/>
        <Route path="/pending-approvals" element={<ApprovePropertyStatus />}/>
        <Route path="/property-status" element={<AdminPropertiesStatus />}/>
        <Route path="/wishlist" element={<ViewWishlist />}/>


      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App