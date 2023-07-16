import { BsFillHeartFill, BsFillShareFill, BsHeart, BsThreeDotsVertical, } from "react-icons/bs";
import { IoHeartOutline, IoShareOutline } from "react-icons/io5";
import img1 from '../assets/images/0961546823-544968651-original.jpg';
import img2 from '../assets/images/1961546823-544968651-original.jpg';
import img3 from '../assets/images/2961546823-544968651-original.jpg';
import img4 from '../assets/images/image (2).jpg';
import img5 from '../assets/images/image.jpg';
import img6 from '../assets/images/image (1).jpg';
import img7 from '../assets/images/image (6).jpg';
import img8 from '../assets/images/facility_1.jpg';
import img9 from '../assets/images/facility_2.png';
import Facility from "../components/Facility";

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ScheduleCard from "../components/ScheduleCard";
import Review from "../components/Review";
import SideBar from "../components/SideBar";

const items = [
    <Facility key="1" img={img5} alt={"property facility"} name="Torrey Pines Elementary School" rating="A+" score="9/10" gradeRange="K to 5th" access="Public" driveTime="5 min drive" />,
    <Facility key="2" img={img6} alt={"property facility"} name="Murilands Middle School" rating="A+" score="8/10" gradeRange="6th to 8th" access="Public" driveTime="12 min drive" />,
    <Facility key="3" img={img7} alt={"property facility"} name="La Jolla High School" rating="A+" score="9/10" gradeRange="9th to 12th" access="Public" driveTime="11 min drive" />,
    <Facility key="4" img={img8} alt={"property facility"} name="Pruess School UCSD" rating="A+" score="7/10" gradeRange="6th to 12th" access="Charter" driveTime="6 min drive" />,
    <Facility key="5" img={img9} alt={"property facility"} name="The Evans School" rating="A+" gradeRange="PK to 6th" access="Private" driveTime="12 min drive" />,
]

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>{item}</h3>
                    </div>
                ))}
        </>
    );
}

function PaginatedItems({ }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + 3;
    //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / 3);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 3) % items.length;
        // console.log(
        //   `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="•••"
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                // previousClassName=" border border-black rounded-full my-auto h-6 w-9 text-2xl"
                // nextClassName=" border-1 border-black rounded-full my-auto h-6 w-9 p-1 text-2xl"
                // pageClassName=" border-1 border-black rounded-full "
                containerClassName="flex align-middle w-100 mx-auto gap-5  text-sky-600"
            // activeClassName="text-gray-500"
            />
        </>
    );
}

function AdminAppointments() {


    return (
        <>
            <div>
                <SideBar />

                <div className="mb-5 ml-60">
                    <div className=" overflow-hidden w-full ">
                        <div className="grid grid-cols-6 gap-1 mx-40 pb-5 ">
                            <div className="col-span-4">
                                <img src={img1} alt="product info" className=" mix-blend-multiply h-full w-auto cover" />
                            </div>
                            <div className="col-span-2 grid grid-rows-2 gap-1">
                                <div className=' '>
                                    <img src={img2} alt="product info" className="h-full cover" />
                                </div>
                                <div className=' '>
                                    <img src={img3} alt="product info h-full" className=" h-full cover" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className=" my-3  ">
                        <div className="flex  gap-5 mx-9">
                            <div className="w-full">
                                <div>
                                    <div>
                                        <div className="flex justify-between w-full">
                                            <h2 className="text-2xl font-semibold">$2,100,000</h2>
                                            <div className="flex gap-5 text-gray-700 ">
                                                <IoHeartOutline className="my-auto cursor-pointer text-3xl" />
                                                <IoShareOutline className="my-auto cursor-pointer text-3xl" />
                                                <BsThreeDotsVertical className="my-auto cursor-pointer text-3xl" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="w-64  text-gray-800">
                                        <p className="text-left mt-3">9694 Claiborne Sq</p>
                                        <p className="text-left">La Jolla, CA 92037 | La Jolla Farms
                                            Estimated payment $13,959/month</p>
                                    </div>
                                    <div className=" border-1 border-t border-b py-3 border-gray-300 flex justify-between px-10 my-10 text-xl divide-x divide-slate-400 m">
                                        <p><b>4</b> Beds</p>
                                        <p className="pl-12"><b>3</b> Baths</p>
                                        <p className="pl-12"><b>2,685</b> SqFt</p>
                                        <p className="pl-12"><b>$500/mo</b> HOA Fee</p>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-lg">About This Home</h3>
                                        <p className="text-gray-700 ">
                                            Welcome to this stunning one of a kind home in the prestigious Blackhorse community. If you're looking for a modern retreat this recently renovated home is perfect for you. Professionally finished by a European design studio it was completely updated with Miele appliances and contemporary cabinetry. Get ready to escape to your private oasis with private pool and jacuzzi as well as access to the beautiful Estancia resort. This turn key luxury home is waiting and you won't want to miss out.
                                        </p>
                                    </div>
                                    <div className="w-64  text-gray-800">
                                        <p className="text-left mt-3">Listing Agent</p>
                                        <p className="text-left font-semibold">Vivi Henely</p>
                                        <p className="text-left">Compass</p>
                                        <p className="text-left ">(619) 990-7703</p>
                                        <p className="text-left ">vivihenely@gmailcom</p>
                                        <p className="text-left ">License #01734590</p>
                                    </div>
                                    <div className="grid grid-cols-3 text-left py-6 border-b border-gray-300">
                                        <div>
                                            <div className="mb-4">
                                                <p className="text-gray-700">Home Type</p>
                                                <p className="font-semibold">Townhome</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-700">Year Built</p>
                                                <p className="font-semibold">1989</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-4">
                                                <p className="text-gray-700">Days on Market</p>
                                                <p className="font-semibold">New 13 hours ago</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-700">Price Per Sq Ft </p>
                                                <p className="font-semibold">$782</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="mb-4">
                                                <p className="text-gray-700">Est. Annual Taxes</p>
                                                <p className="font-semibold">$21,122</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-700">HOA Fees</p>
                                                <p className="font-semibold">$500/month</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="font-semibold text-xl text-left mt-3">Most Popular</h2>
                                        <div className="grid grid-cols-3 gap-5 text-left py-6 border-b border-gray-300">

                                            <PaginatedItems className="" />
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="font-semibold text-xl text-left mt-3">Parks and Recreation</h2>
                                        <div className="grid grid-cols-3 gap-5 text-left py-6 border-b border-gray-300">

                                            <PaginatedItems className="" />
                                        </div>
                                    </div>

                                    <Review />

                                    {/* <div className="grid grid-cols-3 gap-5 text-left py-6 border-b border-gray-300">
                                    <PostStatus name="Big House" price="#1200000" img={img3} city="Abuja" type="Duplex" access="Estate" traffic="8/10" status="Pending" />
                                </div> */}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default AdminAppointments