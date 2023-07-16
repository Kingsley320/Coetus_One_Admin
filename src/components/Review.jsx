import { BsFillPersonFill, BsHandThumbsDownFill, BsHandThumbsUpFill } from "react-icons/bs";
import AReview from "./AReview";

export default function Review(props) {
    return (
        <>
            <div className="rounded-xl shadow-lg h-auto p-5 mt-10 border-1">
                <h1 className="text-xl font-bold block text-left mb-2">Comment Section</h1>
                <div className="block">
                    <textarea className="w-full h-32 rounded-md p-4 bg-gray-100 text-black rounded-xl" placeholder="Add a Comment">
                    </textarea>
                    <button className="bg-orange-500 hover:bg-orange-600 my-5 w-full h-11 rounded-xl text-white font-semibold ">
                        Add Comment
                    </button>
                </div>
                <div className="text-left">
                    <AReview name="Kingsley Owolabi" comment="Tour was nice, still negotiating"/>
                </div>
            </div>
        </>
    )
}