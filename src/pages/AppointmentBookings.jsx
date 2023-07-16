import AdminAppointments from "../components/AdminAppointments"
import SideBar from "../components/SideBar"

function AppointmentBookings() {
    return (
        <>
            <div className="h-screen flex space-between">
                <SideBar />
                <AdminAppointments />
            </div>
        </>
    )
}
export default AppointmentBookings