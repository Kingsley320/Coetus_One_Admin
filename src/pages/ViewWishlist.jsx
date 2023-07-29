import Card1 from "../assets/images/1961546823-544968651-original.jpg";
import "./css/ViewWishlist.css"
import SideBar from "../components/SideBar";
import WishlistCard from "../components/WishlistCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function ViewWishlist() {
    const [wishlist, setWishlist] = useState([]);
    const baseURL = "http://property.reworkstaging.name.ng/v1";
    const config = {
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("admin-token")}`
        }
    }

    const getAdminWishlist = async () => {
        try {
            const payload = await axios.get(`${baseURL}/merchants/${sessionStorage.getItem('admin-id')}/wishlist`, config)
            setWishlist(payload.data.data)
            console.log(wishlist);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAdminWishlist();
    }, [])

    return (
        <div className="flex">
            <SideBar />
            <div className="Wishlist pl-72 ">
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

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 gap-4 mx-auto" >

                    {
                        wishlist.map(item => {
                            <div key={item.id}>
                                <WishlistCard image={item.image} name={item.address} plot={item.address} city={item.city} price={item.price} />
                            </div>
                        })
                    }

                    {/* <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} />
                    <WishlistCard image={Card1} name="Ozone Park NY 11417  Ozone Park" plot="2026" city="Ontario" price={320000} /> */}

                </div>
            </div>
        </div>
    )
}

export default ViewWishlist;