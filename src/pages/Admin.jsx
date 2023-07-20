import SideBar from "../components/SideBar";
import user from "../assets/images/Group 7.png";
import Logo from "../assets/images/Group 7.png";
import { BiSolidNotification } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useRef } from "react";
import "./css/Admin.css";
import axios from "axios";
import { useEffect } from "react";
import PropertyRow from "../components/PropertyRow";
import UserRow from "../components/UserRow";
function Admin() {
    // Template Emmanuel got from somewhere. Don't try to understand it
    const [searchQuery, setSearchQuery] = useState('');
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchQuery);
    };
    const handleSearch = (query) => {
        const element = document.getElementsByClassName(query)[0];
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    const elementRef = useRef();
    const scrollToElement = () => {
        if (elementRef) {
            elementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // End of his template


    // Variables and code for dashboard total properties, total users and total wishlist
    const [propertieslen, setPropertiesLen] = useState(0);
    const [userslen, setUsersLen] = useState(0);
    const [wishlistlen, setWishlistLen] = useState(0);
    const [properties, setProperties] = useState([]);
    const [users, setUsers] = useState([]);
    const [agents, setAgents] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const baseURL = "http://property.reworkstaging.name.ng/v1";
    const config = {
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("admin-token")}`
        }
    }
    const getProperties = async () => {
        try {
            const properties = await axios.get(`${baseURL}/properties?agent=64b847c211d45559c8840c16&verified=false`, config)
            setPropertiesLen(properties.data.data.length);
            setProperties(properties.data.data);
            // console.log(properties.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    // Get agents under a merchant from the API
    // const getAgents = async () => {
    //     try {
    //         const agents = await axios.get(`${baseURL}/agents`, config)
    //         setAgents(agents.data.data);
    //         console.log(agents.data.data);
    //         // setAgentsLen(agents.data.data.length);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // Get users under a merchant or agent from the API
    const getUserCount = async () => {
        try {
            const users = await axios.get(`${baseURL}/users`, config)
            // console.log(users.data.data);
            setUsersLen(users.data.data.length);
            setUsers(users.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Get wishlist items
    // const getAdminWishlist = async () => {
    //     try {
    //         const users = await axios.get(`${baseURL}/merchants/:${sessionStorage.getItem('admin-id')}/wishlist`, config)
    //         console.log(users.data.data.length);
    //         setWishlistLen(users.data.data.length);
    //         setWishlist(users.data.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    useEffect(() => {
        getProperties();
        getUserCount();
        // getAdminWishlist();
        // getAgents();
    }, [])

    return (
        <div>
            <div className="Admin">
                <div className="sibeBar">
                    <SideBar />
                </div>
                <div className="dashboard pl-60">
                    <div className="dash-nav">
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={searchQuery} onChange={handleChange} placeholder="Search by classname" />
                            <button type="submit">Search</button>
                        </form>
                        <div className="icon-profile">
                            <div className="user">
                                <BiSolidNotification />
                            </div>
                            <div className="profile">
                                <img src={user} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="cards" ref={elementRef} onClick={scrollToElement}>
                        <div className="card1">
                            <div className="title-icon">
                                <h3>Total Properties</h3>
                                <MdProductionQuantityLimits className="Icon" />
                            </div>
                            <h2>{propertieslen}</h2>
                        </div>
                        <div className="card2">
                            <div className="title-icon">
                                <h3>Total User</h3>
                                <FaUserAlt className="Icon" />
                            </div>
                            <h2>{userslen}</h2>
                        </div>
                        <div className="card3">
                            <div className="title-icon">
                                <h3> Products in Wishlist</h3>
                                <AiOutlineShoppingCart className="Icon" />
                            </div>
                            <h2>{wishlistlen}</h2>
                        </div>
                    </div>
                    <div className="product-table" ref={elementRef} onClick={scrollToElement}>
                        <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "30px", color: "white" }}>Properties</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>id</th>
                                    <th>City</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    properties.length > 0 ? (
                                        properties.map(property => (
                                            <PropertyRow key={property.id} id={property.id} city={property.city} category={property.category} price={property.price} />

                                        ))
                                    ) :
                                        (
                                            <tr>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                            </tr>
                                        )
                                }

                            </tbody>
                        </table>
                    </div>
                    <h1 style={{ textAlign: "center", marginTop: "30px", color: "white", fontSize: "30px" }}>Agents</h1>
                    <div className="user-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Full Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <UserRow id="0001" fullName="admin admin" phone="0987654345" email="admin@admin.com" />

                            </tbody>
                        </table>
                        <hr className="Hrr" />
                    </div>
                    <h1 style={{ textAlign: "center", marginTop: "30px", color: "white", fontSize: "30px" }}>Users</h1>
                    <div className="user-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Full Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    users.length > 0 ? (
                                        users.map(user => (
                                            <UserRow key={user.id} id={user.id} fullName={user.first_name + user.last_name} phone={user.phone} email={user.email}/>

                                        ))
                                    ) :
                                        (
                                            <tr>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                                <td>Loading...</td>
                                            </tr>
                                        )
                                }
                            </tbody>
                        </table>
                        <hr className="Hrr" />
                    </div>
                    <footer className="footer">
                        <h4>Copyright © groupOne.com 2023</h4>
                        <h4 className="Made-by">Made by <img src={Logo} alt="" className="Logo" /></h4>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Admin;