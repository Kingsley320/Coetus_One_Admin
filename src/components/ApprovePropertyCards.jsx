import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import img1 from "../assets/images/1961546823-544968651-original.jpg";
import axios from "axios";

function ApprovePropertyCard(props) {
    
    const baseURL = "http://property.reworkstaging.name.ng/v1";
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + sessionStorage.getItem("admin-token")
        }
      }
    const handleApprove = async (e) => {
        const body = {
            "is_verified": true
        }
        const id = e.parentNode.parentNode.parentNode.id;
        try {
            const Approval = await axios.put(`${baseURL}/properties/${id}/set-verified`, body, config)
            console.log(Approval.data);
            alert("Verified");
        } catch (error) {
            console.log(error);
        }
    }
    const handleDecline = async (e) => {
        const body = {
            "is_verified": false
        }
        const id = e.parentNode.parentNode.parentNode.id;
        try {
            const Approval = await axios.delete(`${baseURL}/properties/${id}`, config)
            console.log(Approval.data);
        } catch (error) {
            console.log(error);
        }
    }

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
                    <button className="flex rounded-xl bg-orange-500 hover:bg-orange-600 px-5 py-3 text-white" onClick={(e) => {handleApprove(e.target)}}>Approve <BsFillCheckCircleFill  className="mx-2 my-auto text-white font-semibold" /></button>
                    <button className="flex rounded-xl bg-orange-500 hover:bg-orange-600 px-5 py-3 text-white" onClick={(e) => {handleDecline(e.target)}}>Decline <BsFillXCircleFill  className="mx-2 my-auto text-white font-semibold"/></button>
                </div>
            </div>
        </div>
    )
}


export default ApprovePropertyCard;