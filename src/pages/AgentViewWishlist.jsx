import Card1 from "../assets/images/1961546823-544968651-original.jpg";
import Card2 from "../assets/images/image (7).jpg";
import Card4 from "../assets/images/image (7).jpg";
import Card6 from "../assets/images/image (7).jpg";
import Card7 from "../assets/images/image (7).jpg";
import CardCarousel from "../assets/images/image (7).jpg";
import CardCarousel2 from "../assets/images/image (7).jpg";
import CardCarousel3 from "../assets/images/image (7).jpg";
import Card8 from "../assets/images/image (7).jpg";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "./css/AgentWishlist.css";
import SideBar from "../components/SideBar";
import WishlistCard from "../components/WishlistCard";

function ViewWishlist() {
    return (
        <div className="">
            <SideBar />
            <div className="Wishlist pl-48">
                <h1>WishList</h1>
                {/* <div className="background-content">
                    <div className="carousel-container">
                        <Carousel autoPlay={true} interval={2000}>
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Image ${index + 1}`} className="CarouselImages" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="background-text">
                        <h3>Discover your dream home in our selection of high-quality houses for sale and rent. Browse through our diverse collection of property pictures, showcasing stunning homes in desirable locations. Each image captures the essence of our meticulously crafted houses, reflecting the exceptional quality and attention to detail that defines our real estate offerings. From luxurious modern designs to charming traditional residences, our selection caters to various tastes and lifestyles. Experience the epitome of comfort, style, and functionality as you explore our portfolio of exceptional homes, ready to fulfill your desires and provide you with a place you can truly call your own.</h3>
                    </div>
                </div> */}

                <br />
                <div className="cards text-white grid grid-cols-3 lg:grid-cols-4 md:grid-cols-2">
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card2} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card2} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                   {/* <div className="card">
                        <img src={Card4} alt="hello" />
                        <h3>106-20 70th Ave Unit 2-B Hills, CA 11375</h3>
                        <h4>3500</h4>
                        <h4>Saskatchewan</h4>
                        <p>$230,000</p>
                        <div className="buttons">
                            <button className="remove-btn"><IoIosRemoveCircleOutline className="remove-icon" />Remove</button>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={CardCarousel3} alt="hello" />
                        <h3>170-25 118th Rd, Canada, CA 11434</h3>
                        <h4>4180</h4>
                        <h4>Montereal</h4>
                        <p>$430.000</p>
                        <div className="buttons">
                            <button className="remove-btn"><IoIosRemoveCircleOutline className="remove-icon" />Remove</button>
                            <button className="view-btn">View</button>
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default ViewWishlist;