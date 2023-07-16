import { BsFillPersonFill, BsHandThumbsDownFill, BsHandThumbsUpFill } from "react-icons/bs";

export default function AReview(props) {
    return (
        <>
            <div className="flex gap-5">
                <BsFillPersonFill className="border border-2 bg-gray text-gray rounded-full text-3xl w-14" />
                <div className="text-left">
                    <p className="mb-3 font-semibold">{props.name}</p>
                    <p className="">{props.comment}.</p>
                    <div className="flex gap-3 mt-3">
                        Likes: {props.likes}
                        <BsHandThumbsUpFill className="text-blue-700" />
                        <BsHandThumbsDownFill className="text-pink-700" />
                    </div>
                </div>
            </div>
        </>
    )
}