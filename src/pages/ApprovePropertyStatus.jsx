import PropertyCards from "../components/PropertyCardStatus";
import SideBar from "../components/SideBar"
import "./css/ApprovePropertyStatus.css"
import img1 from "../assets/images/1961546823-544968651-original.jpg";
import img2 from "../assets/images/image (7).jpg";




function ApprovePropertyStatus() {
  return (
    <div className="propertiesStatus-container">
      <div>
        <SideBar />
      </div>
      <div className="propertiesStatus-Main pl-64">
        <h1 className="Property-Status-h1">Approve Property Status</h1>
        <div className="propertiesStatus-props">
          <PropertyCards name="Duplex" image={img1} price="20000" street="No.12 suleiman street, Maitama" city="Abuja" area="40000" status="Approve" />
          <PropertyCards name="Hotel" image={img2} price="1000000" street="No.12 suleiman street, Maitama" city="Abuja" area="400000" status="Decline" />
          <PropertyCards name="Hotel" image={img2} price="1000000" street="No.12 suleiman street, Maitama" city="Abuja" area="400000" status="Decline" />
          <PropertyCards name="Hotel" image={img2} price="1000000" street="No.12 suleiman street, Maitama" city="Abuja" area="400000" status="Decline" />
          <PropertyCards name="Hotel" image={img2} price="1000000" street="No.12 suleiman street, Maitama" city="Abuja" area="400000" status="Decline" />
          <PropertyCards name="Hotel" image={img2} price="1000000" street="No.12 suleiman street, Maitama" city="Abuja" area="400000" status="Decline" />
        </div>

      </div>
    </div>
  )
};
export default ApprovePropertyStatus;