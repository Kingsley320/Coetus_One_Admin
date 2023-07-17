import SideBar from "../components/SideBar";
import user from "../assets/images/Group 7.png";
import Logo from "../assets/images/Group 7.png";
import { BiSolidNotification } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useRef } from "react";
import "./css/Admin.css";
function Admin() {

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
                                <h3>Total Products</h3>
                                <MdProductionQuantityLimits className="Icon" />
                            </div>
                            <h2>0</h2>
                        </div>
                        <div className="card2">
                            <div className="title-icon">
                                <h3>Total User</h3>
                                <FaUserAlt className="Icon" />
                            </div>
                            <h2>0</h2>
                        </div>
                        <div className="card3">
                            <div className="title-icon">
                                <h3> Products in cart</h3>
                                <AiOutlineShoppingCart className="Icon" />
                            </div>
                            <h2>0</h2>
                        </div>
                    </div>
                    <div className="product-table" ref={elementRef} onClick={scrollToElement}>
                        <h1 style={{ textAlign: "center", marginBottom: "20px", fontSize: "30px", color: "white" }}>Properties</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
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
                                    <th>Password</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
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
                                    <th>Password</th>
                                    <th>Action</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src alt="image" style={{ width: "50px", height: "auto" }} />
                                    </td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td>test</td>
                                    <td><button className="Table-deleteBtn">Delete</button></td>
                                    <td><button className="Table-editBtn">Edit</button></td>
                                </tr>
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