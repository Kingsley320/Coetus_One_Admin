import PropertyCards from "../components/PropertyCardStatus";
import "./css/AdminPropertiesStatus.css"
import img1 from "../assets/images/1961546823-544968651-original.jpg";
import img2 from "../assets/images/image (7).jpg";
import img3 from "../assets/images/image (7).jpg";
import SideBar from "../components/SideBar";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";




function AdminPropertiesStatus() {
  const [properties, setProperties] = useState([]);
  const baseURL = "http://property.reworkstaging.name.ng/v1";

  const fetchAllProducts = async () => {
    const url = `${baseURL}/properties?merchant=64b6904111d45559c8840b12`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + sessionStorage.getItem("admin-token")
      }
    }
    try {
      const properties = await axios.get(url, config);
      setProperties(properties.data.data)
      console.log(properties.data.data);
    } catch (error) {
      console.error(error);
    }
  };
console.log(properties);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="">
      <div>
        <SideBar />
      </div>
      <div className=" pl-0">
        <h1 className="Property-Status-h1">Property Status</h1>
        <div className="propertiesStatus-props">
          
          {properties && properties.map((agentProperties, propertytIndex) => (
                  <div key={propertytIndex}
                  >
                    <PropertyCards
                      id={agentProperties.id}
                      image={agentProperties.image}
                      price={agentProperties.price}
                      area={agentProperties.total_area}
                      street={agentProperties.address}
                      city={agentProperties.city}
                      status = {agentProperties.is_verified.toString() === "true" ? "Verified" : "Unverified"}
                    />
                  </div>
                ))}

        </div>


      </div>
    </div>
  )
};
export default AdminPropertiesStatus;