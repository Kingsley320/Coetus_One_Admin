
export default function Facility(props) {
    return (
        <>
            <div className="rounded-xl shadow-lg overflow-hidden h-72">
                <div className="mb-4 shadow-md">
                    <img src={props.img} alt={props.alt} className="h-40 w-full object-cover" />
                </div>
                <div className="p-3">
                    <p className="font-semibold flex justify-between">{props.name} <span className="flex gap-2"> <span className="w-8 h-8 rounded-full text-white bg-green-700 text-center">{props.rating}</span>
                        <span className="flex w-8 h-8 rounded-full text-white bg-sky-700 align-center">{props.score}</span>
                    </span></p>
                    <p className="text-gray-700">{props.gradeRange} {props.use} • {props.access} • {props.driveTime}</p>
                </div>
            </div>
        </>
    )
}