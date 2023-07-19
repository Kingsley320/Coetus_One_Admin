import { IoEye, IoHeartOutline } from "react-icons/io5";
import "./css/PropertyPage.css"

function PropertyCards(props) {
    return (
        <div className="property-card">
            {/* <div className="top">
                <IoEye />
                <h4>{props.views} views</h4>
            </div> */}
            <div className="middle ">
                <img src={props.image} alt="property" />
            </div>
            <div className="bottom">
                <div className="price-like">
                    <h3>{props.name}</h3>
                    <h3>${props.price}</h3>
                </div>
                <div className="text-left">
                <p >{props.area} Sq ft</p>
                <p>{props.street}</p>
                <p>{props.city}</p>
                </div>
                <div className="property-status ">
                    <p>{props.status}</p>
                </div>
            </div>
        </div>
    )
}


export default PropertyCards;