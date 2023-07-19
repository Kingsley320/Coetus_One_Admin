import img1 from "../assets/images/1961546823-544968651-original.jpg";
import img2 from "../assets/images/image (7).jpg";
import img3 from "../assets/images/2961546823-544968651-original.jpg";
import AppointmentCard from "./AppointmentCard";

export default function AdminAppointments() {
    return (
        <>
            <div className="w-full border-2 rounded-xl shadow-lg h-auto p-5 mt-10 m-10 ml-64 border-1 overflow-y-scroll">
                <h1 className="w-full text-2xl font-bold block text-center mb-4 "> Appointments</h1>
                <div className="grid grid-cols-3 gap-5">
                <AppointmentCard img={img3} city="Carlifornia carlifonia" price="$7,800,000" tenant="Tenant" time="12:00pm" date="08th July, 2023"/>
                <AppointmentCard img={img1} city="Bay Area" price="$1,200,000" tenant="Coetus-One" time="2:00pm" date="17th July, 2023"/>
                <AppointmentCard img={img2} city="Bay Area" price="$2,200,000" tenant="Manuel Chris" time="11:00am" date="21st July, 2023"/>
                <AppointmentCard img={img3} city="Bay Area" price="$1,800,000" tenant="Suleiman" time="3:00pm" date="04th July, 2023"/>
                </div>
            </div>
        </>
    )
}