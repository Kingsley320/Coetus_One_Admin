import img1 from "../assets/images/1961546823-544968651-original.jpg";
import img2 from "../assets/images/image (7).jpg";
import img3 from "../assets/images/2961546823-544968651-original.jpg";
import AppointmentCard from "./AppointmentCard";
import axios from "axios";
import { useEffect } from "react";

export default function AdminAppointments() {

    const handleAppointments = async () => {
        // const axios = require('axios');
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjY5MDQxMTFkNDU1NTljODg0MGIxMiIsImVtYWlsIjoia2luZ3NsZXkxOUBjb2V0dXNvbmUuY29tIiwiZnVsbF9uYW1lIjoiS2luZ3NsZXkgRGV2Iiwicm9sZSI6Ik1FUkNIQU5UIiwiaWF0IjoxNjg5ODU4Nzg0LCJleHAiOjE2ODk4NzY3ODR9.fvIJYOtF5fs-R67tdktzh4_p-BdjlWkLoXDcV18fnlw";


        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }

        try {
            const Appointments = await axios.get(`http://property.reworkstaging.name.ng/v1/appointments?agent=:agent_id&completed=true&page=0&limit=10`, config);
            console.log(Appointments.data);
        } catch (error) {
            log(error);
        }
    }

    useEffect(() => {
        handleAppointments();
    }, [])

    return (
        <>
            <div className="w-full border-2 rounded-xl shadow-lg h-auto p-5 mt-10 m-10 ml-64 border-1 overflow-y-scroll">
                <h1 className="w-full text-2xl font-bold block text-center mb-4 "> Appointments</h1>
                <div className="grid grid-cols-3 gap-5">
                    <AppointmentCard img={img3} city="Carlifornia carlifonia" price="$7,800,000" tenant="Tenant" time="12:00pm" date="08th July, 2023" />
                    <AppointmentCard img={img1} city="Bay Area" price="$1,200,000" tenant="Coetus-One" time="2:00pm" date="17th July, 2023" />
                    <AppointmentCard img={img2} city="Bay Area" price="$2,200,000" tenant="Manuel Chris" time="11:00am" date="21st July, 2023" />
                    <AppointmentCard img={img3} city="Bay Area" price="$1,800,000" tenant="Suleiman" time="3:00pm" date="04th July, 2023" />
                </div>
            </div>
        </>
    )
}