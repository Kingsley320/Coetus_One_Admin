import { BsColumnsGap, BsTextRight, BsFillBagFill, BsFillBagPlusFill, BsFillPersonPlusFill, BsFillPersonFill, BsHeartFill, BsFillCircleFill, BsFillCheckCircleFill, BsFillPeopleFill, BsFillFolderFill, BsFillGeoFill, BsHouseAdd, BsFillHousesFill  } from "react-icons/bs";
import { Link } from "react-router-dom";
import AppointmentBookings from "../pages/AppointmentBookings";
import PropertyPage from "../pages/PropertyPage-admin";

function SideBar() {

    function handleLogout(e) {
        e.preventDefault();
        sessionStorage.removeItem("admin-token");
        window.location = "/" ;
    }


    return (
        <> 
            <div className="h-screen w-56 rounded-ee-2xl rounded-tr-2xl  py-8 bg-orange-600 text-white fixed top-0 z-10">
                <h1 className="flex justify-between text-2xl font-semibold mb-5 px-5">Admin <BsTextRight /></h1>
                <div>
                    <Link to="/dashboard" className="w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsColumnsGap className="text-lg my-auto group-hover:scale-125 group-focus:scale-125 " /> Dashboard</Link>

                    <Link to="/create-properties" className="w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsHouseAdd className="text-lg my-auto group-hover:scale-125 group-focus:scale-125 " /> Create Property</Link>

                    <Link to="/view-properties" className=" w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillHousesFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />View Properties</Link>

                    <Link to="/create-user"  className=" w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillPersonPlusFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Create User</Link>
{/* 
                    <Link to="/users"  className=" w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillPeopleFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Users</Link> */}

                    <Link to="/create-agent"  className=" w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillPersonPlusFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Create Agent</Link>


                    <Link to="/appointments" element={<AppointmentBookings />} className=" w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillFolderFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Appointments</Link>

                    <Link to="/pending-approvals"  className=" w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillCircleFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Pending Approvals</Link>

                    {/* <Link to="/answered-approvals"  className=" w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillBagPlusFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Answered Approvals</Link> */}

                    <Link to="/property-status"  className=" w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsFillGeoFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Property Status</Link>

                    <Link to="/wishlist"  className=" w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800"><BsHeartFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Wishlist</Link>

                    <button className=" w-full flex gap-4 my-1 py-3 px-5 hover:bg-orange-800 group focus:pl-14 focus:bg-orange-800" onClick ={(e) => handleLogout(e)}><BsFillCircleFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Logout</button>
                </div>
            </div>
        </>
    )
}
export default SideBar