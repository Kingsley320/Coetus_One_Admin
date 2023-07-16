import { BsCartFill, BsPersonFill } from "react-icons/bs";
import DashProducts from "./DashProducts";
import img1 from '../assets/images/0961546823-544968651-original.jpg';


function DashInfo() {


    return (
        <>
            <div className="w-full ml-64">
                <div className="pt-8 p-3 mb-10 bg-white ">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                </div>

                <div className="grid grid-cols-3 gap-10 mr-5">
                    <div className="flex gap-5 bg-white px-10 py-3 text-lg rounded-lg">
                        <div className="flex align-middle h-14 w-14 rounded-full bg-blue-300 ">
                            <BsPersonFill className="my-auto mx-auto text-blue-800 h-6 w-6  " />
                        </div>
                        <div>
                            <h3>{0}</h3>
                            <small className="text-gray-500">Total Properties</small>
                        </div>
                    </div>
                    <div className="flex gap-5 bg-white px-10 py-3 text-lg rounded-lg">
                        <div className="flex align-middle h-14 w-14 rounded-full bg-pink-300 ">
                            <BsPersonFill className="my-auto mx-auto text-pink-800 h-6 w-6  " />
                        </div>
                        <div>
                            <h3>{0}</h3>
                            <small className="text-gray-500">Total Users</small>
                        </div>
                    </div>
                    <div className="flex gap-5 bg-white px-10 py-3 text-lg rounded-lg">
                        <div className="flex align-middle h-14 w-14 rounded-full bg-green-300 ">
                            <BsCartFill className="my-auto mx-auto text-green-800 h-6 w-6  " />
                        </div>
                        <div>
                            <h3>{0}</h3>
                            <small className="text-gray-500">Total Agents</small>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white mt-8 rounded-lg p-3 mr-8">
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
                            {/* {
                                products.length > 0 ? (
                                    products.filter(product => product.category === 'seyi').map(product => ( */}
                                        <DashProducts 
                                        key={1} 
                                        id={1} 
                                        image={img1} 
                                        cat={"triplex"} 
                                        // price={`$${product.price}`}
                                         sqft={3000} 
                                         description={"Big Duplex"} />

                                        <DashProducts 
                                        key={2} 
                                        id={2} 
                                        image={img1} 
                                        cat={"bungalow"} 
                                        // price={`$${product.price}`}
                                         sqft={3000} 
                                         description={"Big Duplex"} />

                                    {/* ))
                                ) : (
                                    <tr className="w-full h-40 flex justify-middle align-middle">
                                        <th className="my-auto mx-auto text-3xl font-bold">Loading...</th>
                                    </tr>
                                )
                            } */}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default DashInfo