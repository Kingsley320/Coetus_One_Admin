import Card1 from "../assets/images/1961546823-544968651-original.jpg";
import "./css/ViewWishlist.css"
import SideBar from "../components/SideBar";
import WishlistCard from "../components/WishlistCard";

function ViewWishlist() {
    return (
        <div className="flex">
            <SideBar />
            <div className="Wishlist pl-60 ">
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

                <div className="grid grid-cols-3 gap-10 mx-10" >
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />

                </div>
            </div>
        </div>
    )
}

export default ViewWishlist;