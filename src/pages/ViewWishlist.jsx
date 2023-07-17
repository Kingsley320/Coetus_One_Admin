// import Navbar from "./Navbar";
// import ViewImage from "../image/wishlist image.jpg";
import CardImage from "../assets/images/image5.jpg";
import Card2 from "../assets/images/image5.jpg";
// import Card3 from "./images/card3.jpg";
import Card4 from "../assets/images/image5.jpg";
// import Card5 from "../image/card5.jpg";
import Card6 from "../assets/images/image5.jpg";
import Card7 from "../assets/images/image5.jpg";
import CardCarousel from "../assets/images/image5.jpg"
import CardCarousel2 from "../assets/images/image5.jpg"
import CardCarousel3 from "../assets/images/image5.jpg"
import Card8 from "../assets/images/image5.jpg";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import "./css/ViewWishlist.css"
import SideBar from "../components/SideBar";
// import Footer from "./Footer";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// const images = [
//     CardCarousel2,
//     CardCarousel,
//     CardCarousel3,
// ];

function ViewWishlist() {
    return (
        <div className="flex">
            <SideBar />
            <div className="Wishlist pl-40">
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
                <div className="cards gap-20">
                    <div className="card">
                        <img src={CardImage} alt="hello" />
                        <div className="texts">
                            <h3>Ozone Park NY 11417  Ozone Park</h3>
                            <h4>2026</h4>
                            <h4>Ontario</h4>
                            <p>$320,000</p>
                            <div className="buttons">
                                <button className="remove-btn"><IoIosRemoveCircleOutline className="remove-icon" />Remove</button>
                                <button className="view-btn">View</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Card2} alt="hello" />
                        <h3>52-7 74th St Elmhurst, CA 11373</h3>
                        <h4>2473</h4>
                        <h4>Toronto</h4>
                        <p>$110,000</p>
                        <div className="buttons">
                            <button className="remove-btn"><IoIosRemoveCircleOutline className="remove-icon" />Remove</button>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={CardCarousel} alt="hello" />
                        <h3>170-25 118th Rd, Canada, CA 11434</h3>
                        <h4>4037</h4>
                        <h4>Quebec</h4>
                        <p>$230.000</p>
                        <div className="buttons">
                            <button className="remove-btn"><IoIosRemoveCircleOutline className="remove-icon" />Remove</button>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                </div>

                <div className="cards-2">
                    <div className="card">
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
                        <h3>170-25 118th Rd, Canada, <br /> CA 11434</h3>
                        <h4>4180</h4>
                        <h4>Montereal</h4>
                        <p>$430.000</p>
                        <div className="buttons">
                            <button className="remove-btn"><IoIosRemoveCircleOutline className="remove-icon" />Remove</button>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Card6} alt="hello" />
                        <h3>52-7 74th St Elmhurst, <br /> CA 11373</h3>
                        <h4>2219</h4>
                        <h4>Toronto</h4>
                        <p>$220,000</p>
                        <div className="buttons">
                            <button className="remove-btn"><IoIosRemoveCircleOutline className="remove-icon" />Remove</button>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                </div>
                <div className="cards-3">
                    <div className="card">
                        <img src={Card7} alt="hello" />
                        <h3>52-7 74th St Elmhurst, CA 11373</h3>
                        <h4>2411</h4>
                        <h4>Alberta</h4>
                        <p>$310,000</p>
                        <div className="buttons">
                            <button className="remove-btn"><IoIosRemoveCircleOutline className="remove-icon" />Remove</button>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={CardCarousel2} alt="hello" />
                        <h3>52-7 74th St Elmhurst, CA 11373</h3>
                        <h4>2413</h4>
                        <h4>Newfoundland </h4>
                        <p>$300,000</p>
                        <div className="buttons">
                            <button className="remove-btn"><IoIosRemoveCircleOutline className="remove-icon" />Remove</button>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Card8} alt="hello" />
                        <h3>52-7 74th St Elmhurst, CA 11373</h3>
                        <h4>2411</h4>
                        <h4>Alberta</h4>
                        <p>$310,000</p>
                        <div className="buttons">
                            <button className="remove-btn"><IoIosRemoveCircleOutline className="remove-icon" />Remove</button>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                </div>
                {/* <br /> */}
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default ViewWishlist;