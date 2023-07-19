import PropertyCards from "../components/PropertyCardStatus";
import "./css/AdminPropertiesStatus.css"
import img1 from "../assets/images/1961546823-544968651-original.jpg";
import img2 from "../assets/images/image (7).jpg";
import img3 from "../assets/images/image (7).jpg";
import SideBar from "../components/SideBar";




function AdminPropertiesStatus() {
  return (
    <div className="propertiesStatus-container">
      <div>
        <SideBar />
      </div>
      <div className="propertiesStatus-Main pl-64">
        <h1 className="Property-Status-h1">Property Status</h1>
        <div className="propertiesStatus-props">
          <PropertyCards name="Duplex" image={img1} price="20000" street="No.12 suleiman street, Maitama" city="Abuja" area="40000" status="Approved" />
          <PropertyCards name="Hotel" image={img2} price="1000000" street="No.12 suleiman street, Maitama" city="Abuja" area="400000" status="Declined" />
          <PropertyCards name="semi-detac" image={img3} price="220000" street="No.12 suleiman street, Maitama" city="Kaduna" area="3000" status="Pending" />
          <PropertyCards name="semi-detac" image={img3} price="220000" street="No.12 suleiman street, Maitama" city="Benin" area="3000" status="Approved" />
        </div>


      </div>
    </div>  
  )
};
export default AdminPropertiesStatus;