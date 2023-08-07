
export default function AppointmentCard(props) {
    return (
        <>
            <div className="rounded-xl shadow-lg overflow-hidden h-76">
                <div className="mb-1 shadow-md">
                    <img src={props.img} alt={props.alt} className="h-40 w-full object-cover" />
                </div>
                <div className="p-3 px-5 w-full leading-8 text-left">
                    <div className="w-full   justify-between text-sm">
                        <p ><span className="font-semibold">Name: </span> {props.city}</p>
                        <p><span className="font-semibold">Price: </span> {props.price}</p>
                    </div>
                    <div>
                        <p><span className="font-semibold">Prospective: </span>{props.tenant}</p>
                    </div>
                    <div>
                        <p><span className="font-semibold">Time: </span>{props.from} - {props.to}</p>
                        <p><span className="font-semibold">Date: </span>{props.date}</p>
                    </div>
                    <p><span className="font-semibold">Completed: </span>{props.completed}</p>
                </div>
            </div>
        </>
    )
}