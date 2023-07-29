import './App.css';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import AppointmentBookings from './pages/AppointmentBookings';
// import Dashboard from './pages/Dashboard';
import SingleProperty from './pages/SingleProperty';
import AdminCreateProperties from './pages/AdminCreateProperties';
import AdminPropertiesStatus from './pages/AdminPropertiesStatus';
import ApprovePropertyStatus from './pages/ApprovePropertyStatus';
import PropertyPage from './pages/PropertyPage-admin';
import ViewWishlist from './pages/ViewWishlist';
import Admin from './pages/Admin';
import NewUser from './pages/NewUser';
import CreateAgent from './pages/CreateAgent';
import Login from './pages/Login';

function App() {
  const baseURL = "http://property.reworkstaging.name.ng/v1";
  const aProperty = `${baseURL}/properties`;

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Admin />}/>

        <Route path="/appointments" element={<AppointmentBookings />}/>
        <Route path={`/:id`} element={<SingleProperty />}/>
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