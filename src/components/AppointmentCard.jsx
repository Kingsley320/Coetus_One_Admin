
export default function AppointmentCard(props) {
    return (
        <>
            <div className="rounded-xl shadow-lg overflow-hidden h-76">
                <div className="mb-1 shadow-md">
                    <img src={props.img} alt={props.alt} className="h-40 w-full object-cover" />
                </div>
                <div className="p-3 px-5 w-full leading-8">
                    <div className="w-full flex justify-between text-sm">
                        <p><span className="font-semibold">Price: </span> {props.price}</p>
                        <p ><span className="font-semibold">City: </span> {props.city}</p>
                    </div>
                    <div className="text-left">
                        <p><span className="font-semibold">Prospective: </span>{props.tenant}</p>
                    </div>
                    <div className="flex justify-between text-left">
                        <p><span className="font-semibold">Time: </span>{props.time}</p>
                        <p><span className="font-semibold">Date: </span>{props.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}