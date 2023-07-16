import { BsCalendar3 } from "react-icons/bs";

export default function ScheduleCard(props) {
    return (
        <>
            <div className="rounded-xl shadow-xl overflow-hidden h-20 w-96 border-l-8  border-blue-600 flex gap-3 shadow-xl ">
                <div className="flex pl-6 h-full">
                   <BsCalendar3 className="text-gray-700 text-xl my-auto"/>
                </div>
                <div className="p-3">
                    <p className="font-bold text-xl">{props.date}  </p>
                    <p className="" >{props.time}</p>
                </div>
            </div>
        </>
    )
}