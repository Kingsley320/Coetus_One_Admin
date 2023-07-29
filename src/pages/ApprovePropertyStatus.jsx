import SideBar from "../components/SideBar"
import "./css/ApprovePropertyStatus.css"
import img1 from "../assets/images/1961546823-544968651-original.jpg";
import img2 from "../assets/images/image (7).jpg";
import ApprovePropertyCard from "../components/ApprovePropertyCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsFillHouseAddFill } from "react-icons/bs";


function ApprovePropertyStatus() {
  const [properties, setProperties] = useState([]);
  const baseURL = "http://property.reworkstaging.name.ng/v1";

  const fetchAllProducts = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + sessionStorage.getItem("admin-token")
      }
    }
    try {
      const properties = await axios.get(`${baseURL}/properties?merchant=${sessionStorage.getItem("admin-id")}&verified=false`, config);
      setProperties(properties.data.data)
      if (properties) { console.log(properties.data.data) };
    } catch (error) {
      console.error(error);
    }
  };

  // const baseURL = "http://property.reworkstaging.name.ng/v1";
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + sessionStorage.getItem("admin-token")
    }
  }
  const handleApprove = async (e) => {
    const body = {
      "is_verified": "true"
    }
    const id = e.parentNode.parentNode.parentNode.id;
    try {
      const Approval = await axios.put(`${baseURL}/properties/${id}/set-verified`, body, config)
      console.log(Approval.data);
      const newCards = properties.filter(card => card.id !== id)
      setProperties(newCards);
      alert("Verified");
    } catch (error) {
      console.log(error);
    }
  }
  const handleDecline = async (e) => {
    console.log(e);
    const body = {
      "is_verified": "false"
    }
    const id = e.parentNode.parentNode.parentNode.id;
    try {
      const Approval = await axios.put(`${baseURL}/properties/${id}/set-verified`, body, config)
      console.log(Approval.data);
      const newCards = properties.filter(card => card.id !== id)
      setProperties(newCards);
      // alert("Unverified");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="propertiesStatus-container">
      <div>
        <SideBar />
      </div>
      <div className=" mx-16">
        <h1 className="w-full text-center text-3xl font-semibold">Approve Property Status</h1>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {
            properties.length > 0 ? (
              properties.map((agentProperties, propertytIndex) => (
                <div key={propertytIndex}
                >
                  <ApprovePropertyCard
                    id={agentProperties.id}
                    name={agentProperties.name}
                    image={agentProperties.image}
                    price={agentProperties.price}
                    area={agentProperties.total_area}
                    address={agentProperties.address}
                    city={agentProperties.city}
                    handleApprove={(e) => { handleApprove(e.target) }}
                    handleDecline={(e) => { handleDecline(e.target) }}
                  />
                </div>
              ))
            ) : (
              <h3 className="flex gap-2 text-xl text-black  mt-10">No New Properties Available <BsFillHouseAddFill /></h3>

            )

          }

        </div>

      </div>
    </div>
  )
};
export default ApprovePropertyStatus;