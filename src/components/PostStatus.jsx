
export default function PostStatus(props) {
    return (
        <>
            <div className="rounded-xl shadow-lg overflow-hidden h-72">
                <div className="mb-4 shadow-md">
                    <img src={props.img} alt={props.alt} className="h-40 w-full object-cover" />
                </div>
                <div className="p-3">
                    <p className="font-semibold flex justify-between">{props.name}
                        <span className="">
                            <span className="">{props.price}</span>
                        </span></p>
                    <p className="text-gray-700 w-full mx-auto tracking-widest">{props.city} • {props.type} • {props.access} • {props.traffic}</p>
                </div>
                <div className="bg-orange-500 text-white font-bold flex ">
                <p className="mx-auto w-full">{props.status}</p>
                </div>
            </div>
        </>
    )
}