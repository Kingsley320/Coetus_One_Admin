import { IoEye, IoHeartOutline } from "react-icons/io5";
function PropertyCards(props) {
    return (
        <div className="property-card text-left h-auto bg-white">
            {/* <div className="top">
                <IoEye />
                <h4>{props.views} views</h4>
            </div> */}
            <div className="middle">
                <img src={props.image} alt="property" className="m-0  p-0 h-20"/>
            </div>
            <div className="bottom mt-8 leading-2">
                <div className="price-like">
                    <h3>${props.price}</h3>
                    <IoHeartOutline className="property-heart hover:scale-125"/>
                </div>
                <p>{props.area} Sq ft</p>
                <p className="clip">{props.street}</p>
                <p>{props.city}</p>
                <div className="btns">
                    <button id="edit">Edit</button>
                    <button id="delete">Delete</button>
                </div>
            </div>
        </div>
    )
}


export default PropertyCards;