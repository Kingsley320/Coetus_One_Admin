import { BsFillPersonFill, BsHandThumbsDownFill, BsHandThumbsUpFill } from "react-icons/bs";
import AReview from "./AReview";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Review() {

    const [text, setText] = useState("");
    const baseURL = "http://property.reworkstaging.name.ng/v1";
    const [reviews, setReviews] = useState([]);
    const [err, setErr] = useState(false);
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + sessionStorage.getItem('admin-token')
        }
    };
    
    const {id} = useParams();
    const getReviews = async () => {

        try {
            const getReviews = await axios.get(`${baseURL}/reviews?property_id=${id}`, config)
            setReviews(getReviews.data.data);
            console.log(getReviews.data.data);
            console.log(reviews.length);
        } catch (error) {
            console.log(error);
        }
    }
    
    const PostReviews = async (e) => {
        e.preventDefault();
        if (
            text === ''
        ) {
            setErr(true);
            return;
        }
        const review = {
            property_id: id,
            user_id: sessionStorage.getItem("admin-id"),
            text: text
        }

        try {
            const getReviews = await axios.post(`${baseURL}/reviews`, body, config)

            console.log(getReviews);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getReviews();
    }, []);

    return (
        <>
            <div className="rounded-xl shadow-lg h-auto p-5 mt-10 border-1">
                <h1 className="text-xl font-bold block text-left mb-2">Comment Section</h1>
                <div className="block">
                    {
                        err === true ? <p className="text-lg text-red-500">Field Required</p> : null
                    }
                    <textarea className="w-full h-32 rounded-md p-4 bg-gray-100 text-black rounded-xl" placeholder="Add a Comment">
                    </textarea>
                    <button className="bg-orange-500 hover:bg-orange-600 my-5 w-full h-11 rounded-xl text-white font-semibold ">
                        Add Comment
                    </button>
                </div>
                <div className="text-left">
                    {
                        reviews.length > 0 ? (
                            reviews.map((review) => (
                                <div key={review.id}>
                               <AReview 
                               name={review.user.full_name + ' ' + review.user.last_name} 
                               comment={review.text} /> 
                                </div>
                            ))
                        ) : (
                            <p>Loading</p>
                        )
                        
                    }
                </div>
            </div>
        </>
    )
}