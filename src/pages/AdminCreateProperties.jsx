import SideBar from "../components/SideBar";
import "./css/AdminCreateProperties.css"
import { useState, useEffect } from "react";

function AdminCreateProperties() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [propertyUse, setPropertyUse] = useState("");
  const [paymentplan, setPaymentplan] = useState("");
  const [type, setType] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [toilet, setToilet] = useState("");
  const [parkingSpace, setParkingSpace] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [disclaimer, setDisclaimer] = useState("");
  const [amenities, setAmenities] = useState("");
  const [agent, setAgent] = useState("");
  const [err, setErr] = useState(false);



  const handleCreateProperty = (e) => {
    e.preventDefault();
    if (name === "" || price === "" || country === "" || state === "" || city === "" || latitude === "" || longitude === "" || address === "" || description === "" || category === "" || totalArea === "" || propertyUse === "" || paymentplan === "" || type === "" || bedroom === "" || bathroom === "" || toilet === "" || parkingSpace === "" || furnishing === "" || disclaimer === "" || amenities === "" || agent === "") {
      setErr(true);
      return;
    }

    // setName("");
    // setPrice("");
    // setCountry("");
    // setState("");
    // setCity("");
    // setLatitude("");
    // setLongitude("");
    // setAddress("");
    // setDescription("");
    // setCategory("");
    // setTotalArea("");
    // setPropertyUse("");
    // setPaymentplan("");
    // setType("");
    // setBedroom("");
    // setBathroom("");
    // setToilet("");
    // setParkingSpace("");
    // setFurnishing("");
    // setDisclaimer("");
    // setAmenities("");
    // setAgent("");


    let property = {
      name: name,
      price: price,
      country: country,
      state: state,
      city: city,
      lat: latitude,
      lng: longitude,
      address: address,
      description: description,
      category: category,
      total_area: totalArea,
      property_use: propertyUse,
      payment_plan: paymentplan,
      type: type,
      bedroom: bedroom,
      bathroom: bathroom,
      toilet: toilet,
      parking_space: parkingSpace,
      furnishing: furnishing,
      disclaimer: disclaimer,
      amenities: amenities,
      agent: agent,
    }




    let url = "http://property.reworkstaging.name.ng/v1/properties";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(property),
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Yjk1Yjk5ZmI5Nzk3YWVkMTYzMzFkYSIsImVtYWlsIjoiY29ldHVzMUBnbWFpbC5jb20iLCJmdWxsX25hbWUiOiJzYW5pIiwiY29tcGFueSI6ImNvZXR1c19vbmUiLCJtZXJjaGFudCI6IjY0Yjk1ODlkZmI5Nzk3YWVkMTYzMzFjOCIsInJvbGUiOiJBR0VOVCIsImlhdCI6MTY4OTg4OTAwMCwiZXhwIjoxNjg5OTA3MDAwfQ.1x__KA36dUF-F-cwM7lxJc02PazGKkRJ2uY-yZhkL8c'
      }
    })
      .then(res => res.json())
      .then(res => {
        alert("Product Created");
        console.log(res)
      })


    const token = sessionStorage.getItem("admin-token")
    console.log(token)

  };


  return (
    <div className="ala">
      <SideBar />
      <div className="pl-64 form-cointerner">
        <form className="form-container" onClick={handleCreateProperty}>
          <h1 className="form-title">Create Property</h1>
          <div className="form-flex">
            <div className="form-flex1">
              <div className="form-input-group">
                <label className="form_label">Name</label><br />
                <input type="text" className="form_input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                {err === true && name === "" ? <span className="createAccSpan">Name Required</span> : null}
              </div>

              <div className="form-input-group">
                <label className="form_label">Price</label><br />
                <input type="text" className="form_input" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
                {err === true && price === "" ? <span className="createAccSpan">Price Required</span> : null}
              </div>

              <div className="form-input-group select11">
                <label className="form_label">Country</label><br />
                <select className="form_input" value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="" hidden>Select a country</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="North Korea">North Korea</option>
                  <option value="North Macedonia">North Macedonia</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Korea">South Korea</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City">Vatican City</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                {err === true && country === "" ? <span className="createAccSpan">Country Required</span> : null}
              </div>

              <div className="form-input-group select11">
                <label className="form_label">State</label><br />
                <select className="form_input" value={state} onChange={(e) => setState(e.target.value)}><br />
                  <option value="" hidden>Select a state</option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa_Ibom">Akwa Ibom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross_River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="FCT_Abuja">FCT - Abuja</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                </select>
                {err === true && state === "" ? <span className="createAccSpan">State Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">City</label><br />
                <input type="text" className="form_input" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} /><br />
                {err === true && city === "" ? <span className="createAccSpan">City Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Latitude</label><br />
                <input type="number" className="form_input" placeholder="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} /><br />
                {err === true && latitude === "" ? <span className="createAccSpan">Latitude Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Longitude</label><br />
                <input type="number" className="form_input" placeholder="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} /><br />
                {err === true && longitude === "" ? <span className="createAccSpan">Longitude Required</span> : null}
              </div>

              <div className="form-input-group">
                <label className="form_label">Address</label><br />
                <input type="text" className="form_input" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} /><br />
                {err === true && address === "" ? <span className="createAccSpan">Address Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Description</label><br />
                <input type="text" className="form_input" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
                {err === true && description === "" ? <span className="createAccSpan">Description Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Category</label><br />
                <input type="text" className="form_input" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} /><br />
                {err === true && category === "" ? <span className="createAccSpan">Category Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Total Area</label><br />
                <input type="text" className="form_input" placeholder="Total Area" value={totalArea} onChange={(e) => setTotalArea(e.target.value)} /><br />
                {err === true && totalArea === "" ? <span className="createAccSpan">Total Area Required</span> : null}
              </div>

            </div>

            <div className="form-flex2">
              <div className="form-input-group">
                <label className="form_label">Property Use</label><br />
                <input type="text" className="form_input" placeholder="Property Use" value={propertyUse} onChange={(e) => setPropertyUse(e.target.value)} /><br />
                {err === true && propertyUse === "" ? <span className="createAccSpan">Property Use Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Payment Plan</label><br />
                <input type="text" className="form_input" placeholder="Payment Plan" value={paymentplan} onChange={(e) => setPaymentplan(e.target.value)} /><br />
                {err === true && paymentplan === "" ? <span className="createAccSpan">Payment Plan Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Type</label><br />
                <input type="text" className="form_input" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} /><br />
                {err === true && type === "" ? <span className="createAccSpan">Type Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Bedroom</label><br />
                <input type="number" className="form_input" placeholder="Bedroom" value={bedroom} onChange={(e) => setBedroom(e.target.value)} /><br />
                {err === true && bedroom === "" ? <span className="createAccSpan">Bedroom Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Bathroom</label><br />
                <input type="number" className="form_input" placeholder="Bathroom" value={bathroom} onChange={(e) => setBathroom(e.target.value)} /><br />
                {err === true && bathroom === "" ? <span className="createAccSpan">Bathroom Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Toilet</label><br />
                <input type="number" className="form_input" placeholder="Toilet" value={toilet} onChange={(e) => setToilet(e.target.value)} /><br />
                {err === true && toilet === "" ? <span className="createAccSpan">Toilet Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Parking Space</label><br />
                <input type="number" className="form_input" placeholder="Parking Space" value={parkingSpace} onChange={(e) => setParkingSpace(e.target.value)} /><br />
                {err === true && parkingSpace === "" ? <span className="createAccSpan">Parking Space Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Furnishing</label><br />
                <input type="text" className="form_input" placeholder="Furnishing" value={furnishing} onChange={(e) => setFurnishing(e.target.value)} /><br />
                {err === true && furnishing === "" ? <span className="createAccSpan">Furnishing Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Disclaimed</label><br />
                <input type="text" className="form_input" placeholder="Disclaimed" value={disclaimer} onChange={(e) => setDisclaimer(e.target.value)} /><br />
                {err === true && disclaimer === "" ? <span className="createAccSpan">Disclaimed Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Amenities</label><br />
                <select className="form_input" value={amenities} onChange={(e) => setAmenities(e.target.value)}>
                  <option value="" hidden>seclect Amenities</option>
                  <option value="BEDROOM">BEDROOM</option>
                  <option value="TOILET">TOILET</option>
                  <option value="GYM">GYM</option>
                </select>
                {err === true && amenities === "" ? <span className="createAccSpan">Amenities Required</span> : null}
              </div>
              <div className="form-input-group">
                <label className="form_label">Agent</label><br />
                <input type="text" className="form_input" placeholder="Agent" value={agent} onChange={(e) => setAgent(e.target.value)} /><br />
                {err === true && agent === "" ? <span className="createAccSpan">Agent Required</span> : null}
              </div>
            </div>
          </div>
          <button type="submit" className="form_button">Create</button>
        </form>
      </div>
    </div>
  );
}

export default AdminCreateProperties;