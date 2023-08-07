import { IoEye, IoHeartOutline } from "react-icons/io5";
import "./css/PropertyPage.css"

function PropertyCards(props) {
    return (
        <div className="w-80 h-96 rounded-xl overflow-hidden border-2 border-gray-200">
            {/* <div className="top">
                <IoEye />
                <h4>{props.views} views</h4>
            </div> */}
            <div className="w-full h-48 overflow-hidden">
                <img src={props.image} alt="property" className="w-full "/>
            </div>
            <div className="text-left">
                <div className="flex justify-between mr-2">
                    <h3>Name: {props.name}</h3>
                    <h3>Price: ${props.price}</h3>
                </div>
                <div className="text-left">
                <p >Size: {props.area} </p>
                <p>Address: {props.street}</p>
                <p>City: {props.city}</p>
                </div>
                <div className="property-status ">
                    <p>{props.status}</p>
                </div>
            </div>
        </div>
    )
}


export default PropertyCards;