import img1 from "../assets/images/1961546823-544968651-original.jpg";
import img2 from "../assets/images/image (7).jpg";
import img3 from "../assets/images/2961546823-544968651-original.jpg";
import AppointmentCard from "./AppointmentCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";

export default function AdminAppointments() {
    const [appointments, setAppointments] = useState([]);
    const handleAppointments = async () => {

        const config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("admin-token")}`
            }
        }

        try {
            const Appointments = await axios.get(`http://property.reworkstaging.name.ng/v1/appointments?merchant=${sessionStorage.getItem('admin-id')}`, config);
            console.log(Appointments.data.data);
            // console.log(Appointments.data.data[0].date.substring(0,10));
            setAppointments(Appointments.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleAppointments();
    }, [])

    return (
        <>
            <div className="w-full border-2 rounded-xl shadow-lg h-auto p-5 mt-10 m-10 ml-64 border-1 overflow-y-scroll">
                <h1 className="w-full text-2xl font-bold block text-center mb-4 "> Appointments</h1>
                <div className="w-full grid grid-cols-3 gap-5">
                    {
                        appointments.length > 0 ? (
                            appointments && appointments.map((appointment) => (
                                <AppointmentCard key={appointment.id} img={appointment.image} city={appointment.property.name} price={appointment.property.price} tenant={appointment.user.full_name + " " + appointment.user.last_name} from={appointment.time.from} to={appointment.time.to} date={new Date(appointment.date).toString().substring(0,10)} completed={appointment.is_completed.toString()}/>
                            ))
                        ): (
                            // <div className="h-96 text-black text-2xl w-full mx-auto ">
                            <p className="w-full my-auto mx-auto flex">No Appointments <BsClipboardCheck className="my-auto"/></p>
                        // </div>
                        )
                    }


                    {/* <AppointmentCard img={img1} city="Bay Area" price="$1,200,000" tenant="Coetus-One" time="2:00pm" date="17th July, 2023" />
                    <AppointmentCard img={img2} city="Bay Area" price="$2,200,000" tenant="Manuel Chris" time="11:00am" date="21st July, 2023" />
                    <AppointmentCard img={img3} city="Bay Area" price="$1,800,000" tenant="Suleiman" time="3:00pm" date="04th July, 2023" /> */}
                </div>
            </div>
        </>
    )
}