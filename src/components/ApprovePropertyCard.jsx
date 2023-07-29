import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import img1 from "../assets/images/1961546823-544968651-original.jpg";
import axios from "axios";

// Note: API requires a property to have at least an image to qualify verification process
function ApprovePropertyCard(props) {

    return (
        <div className="w-80 h-96 bg-white rounded-xl overflow-hidden border-2 border-gray relative" id={props.id}>
            <div className="w-full h-48 overflow-hidden flex justify-center">
                <img src={props.image} alt="property" className="w-full text-center ease-in-out duration-300 hover:scale-110" />
            </div>
            <div className=" pt-2">
                <div className="flex justify-between mx-5 my-2"><span>{props.name}</span><span>{props.area}</span></div>
                <div className="flex justify-between mx-5 my-2"><span>₦{props.price}</span><span>{props.city}, {props.country}</span></div>
                <p className="w-full text-left w-72 mx-5 text-sm h-auto h-10">Address:{props.address}</p>
                <div className="flex justify-between mx-5 py-3 ">
                    <button className="flex rounded-xl bg-orange-500 hover:bg-orange-600 px-5 py-3 text-white" onClick={props.handleApprove}>Approve <BsFillCheckCircleFill  className="mx-2 my-auto text-white font-semibold" /></button>
                    <button className="flex rounded-xl bg-orange-500 hover:bg-orange-600 px-5 py-3 text-white" onClick={props.handleDecline}>Decline <BsFillXCircleFill  className="mx-2 my-auto text-white font-semibold"/></button>
                </div>
            </div>
        </div>
    )
}


export default ApprovePropertyCard;