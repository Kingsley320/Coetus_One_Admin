import { BsCartFill, BsPersonFill } from "react-icons/bs";
import SideBar from "../components/SideBar";
import user from "../assets/images/Group 7.png";
import Logo from "../assets/images/Group 7.png";
import { BiSolidNotification } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
import PropertyRow from "../components/PropertyRow";
import UserRow from "../components/UserRow";
import AgentRow from "../components/AgentRow";

function DashInfo() {
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
    const getAgents = async () => {
        try {
            const agents = await axios.get(`${baseURL}/merchants/agents`, config)
            setAgents(agents.data.data);
            // console.log(agents.data.data);
            // setAgentsLen(agents.data.data.length);
        } catch (error) {
            console.log(error);
        }
    }

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
    const getAdminWishlist = async () => {
        try {
            const users = await axios.get(`${baseURL}/merchants/${sessionStorage.getItem('admin-id')}/wishlist`, config)
            // console.log(users.data.data.length);
            setWishlistLen(users.data.data.length);
            setWishlist(users.data.data);
        } catch (error) {
            console.log(error);
        }
    }


    const deleteProperty = async (e) => {
        const id = e.parentNode.parentNode.id;
        console.log(id);
        // const newProps = properties.filter(property => property.id !== id );
        // console.log(newProps);
        setProperties(properties.filter(property => property.id !== id ));
        try {
            const deleteItem = await axios.delete(`${baseURL}/properties/${id}`)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProperties();
        getUserCount();
        getAdminWishlist();
        getAgents();
    }, [])

    return (
        <>
            <div className="w-full">
                <div className="pt-8 p-3 mb-10 bg-white ">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                </div>

                <div className="grid grid-cols-3 gap-10 mr-5">
                    <div className="flex gap-5 bg-white px-10 py-3 text-lg rounded-lg">
                        <div className="flex align-middle h-14 w-14 rounded-full bg-blue-300 ">
                            <BsPersonFill className="my-auto mx-auto text-blue-800 h-6 w-6  " />
                        </div>
                        <div>
                            <h3>{propertieslen}</h3>
                            <small className="text-gray-500">Total Properties</small>
                        </div>
                    </div>
                    <div className="flex gap-5 bg-white px-10 py-3 text-lg rounded-lg">
                        <div className="flex align-middle h-14 w-14 rounded-full bg-pink-300 ">
                            <BsPersonFill className="my-auto mx-auto text-pink-800 h-6 w-6  " />
                        </div>
                        <div>
                            <h3>{userslen}</h3>
                            <small className="text-gray-500">Total Users</small>
                        </div>
                    </div>
                    <div className="flex gap-5 bg-white px-10 py-3 text-lg rounded-lg">
                        <div className="flex align-middle h-14 w-14 rounded-full bg-green-300 ">
                            <BsCartFill className="my-auto mx-auto text-green-800 h-6 w-6  " />
                        </div>
                        <div>
                            <h3>{wishlistlen}</h3>
                            <small className="text-gray-500">Wishlist Items</small>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full bg-white mt-8 rounded-lg p-3 mr-8">
                    <table className="w-full mr-5">
                        <thead>
                            <tr className="w-full grid grid-cols-5  mr-3">
                                <th className="text-left">Id</th>
                                <th className="text-left text-xs">Image</th>
                                <th className="text-left ">Category</th>
                                <th className="text-left">Quantity</th>
                                <th className="text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 ? (
                                    products.filter(product => product.category === 'seyi').map(product => (
                                        <DashProducts key={product._id} id={product._id} image={product.image} cat={product.category} price={`$${product.price}`} quantity={product.quantity} description={product.description} />

                                    ))
                                ) : (
                                    <tr className="w-full h-40 flex justify-middle align-middle">
                                        <th className="my-auto mx-auto text-3xl font-bold">Loading...</th>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div> */}

                <div className="mx-5 rounded-xl" >
                    <h1 className="my-5 text-xl underline underline-offset-4">Properties</h1>
                    <table className="table-auto w-full  ">
                        <thead className="rounded-lg">
                            <tr className="bg-white text-black border border-t-black border-collaspe">
                                <th>id</th>
                                <th>Image</th>
                                <th>City</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="border border-black border-collaspe">
                            {
                                properties.length > 0 ? (
                                    properties.map(property => (
                                        <PropertyRow key={property.id} id={property.id} image={property.image} city={property.city} category={property.category} price={property.price} handleDelete={(e) => { deleteProperty(e.target) }} />

                                    ))
                                ) :
                                    (
                                        <tr className="border border-black border-collaspe">
                                            <td className="border border-black border-collaspe">Loading...</td>
                                            <td className="border border-black border-collaspe">Loading...</td>
                                            <td className="border border-black border-collaspe">Loading...</td>
                                            <td className="border border-black border-collaspe">Loading...</td>
                                            <td className="border border-black border-collaspe">Loading...</td>
                                            <td className="border border-black border-collaspe">Loading...</td>
                                            <td className="border border-black border-collaspe">Loading...</td>
                                        </tr>
                                    )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default DashInfo