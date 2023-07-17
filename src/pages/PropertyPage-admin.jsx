import "./css/PropertyPage.css";
// import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCards";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import React, { useRef } from 'react';
import img1 from "../components/images/4071788923-427702751-original.avif";
import img2 from "../components/images/8030295992-068154941-original.avif";
import img3 from "../components/images/map1111111111.jpg";
import img4 from "../components/images/5398268923-693891751-original.avif";
import img5 from "../components/images/4151688923-893702751-original.avif";
import img6 from "../components/images/8358588923-642702751-original.avif";
import img7 from "../components/images/0221788923-407702751-original.avif";
import img8 from "../components/images/2270908923-102471751-original.avif";
import img9 from "../components/images/2815828923-505871751-original.avif";
import img10 from "../components/images/8709548923-430871751-original.avif";
import img11 from "../components/images/2273158923-240681751-original.avif";
import img12 from "../components/images/9045077923-716361751-original.avif";
import img13 from "../components/images/8235718923-213571751-original.avif";
import img14 from "../components/images/9481887923-021861751-original.avif";
import img15 from "../components/images/8945637923-756251751-original.avif";
import img16 from "../components/images/1136476923-305331751-original.avif";
import img17 from "../components/images/1737384923-446580751-original.avif";
import img18 from "../components/images/8120836923-136321751-original.avif";
import SideBar from "../components/SideBar"


function PropertyPage() {
  const scrollContainerRefs = useRef([]);

  const scrollLeft = (sectionIndex) => {
    if (scrollContainerRefs.current[sectionIndex]) {
      scrollContainerRefs.current[sectionIndex].scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = (sectionIndex) => {
    if (scrollContainerRefs.current[sectionIndex]) {
      scrollContainerRefs.current[sectionIndex].scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="property-page-bg">
      <div className="property-page"> 
        <div className="left">          
          <SideBar />
        </div>
        <div className="right">
          <h1>View Properties</h1>
          <section>
            <h2>Agent 1</h2>
            <div className="property-cards-contents">
              <button onClick={() => scrollLeft(0)}>
                <IoArrowBackCircle className="property-cards-arrows" />
              </button>
              <div className="property-wrapper" ref={(el) => (scrollContainerRefs.current[0] = el)}>
              <PropertyCard views={33} image={img1} price={"729,000"} area={2026} street={"Ozone Park NY 11417  Ozone Park"} city={"New York"}/>
              <PropertyCard views={71} image={img2} price={"286,500"} area={3100} street={"170-25 118th Rd, Jamaica, NY 11434"} city={"New York"}/>
              <PropertyCard views={27} image={img3} price={"888,000"} area={2473} street={"52-7 74th St Elmhurst, NY 11373"} city={"New York"}/>
              <PropertyCard views={33} image={img4} price={"770,000"} area={4037} street={"106-20 70th Ave Unit 2-B Forest Hills, NY 11375"} city={"New York"}/>                           
              <PropertyCard views={71} image={img5} price={"600,000"} area={3500} street={"1810 3rd Ave Unit A-8A"} city={"New York"}/>
              <PropertyCard views={27} image={img6} price={"650,000"} area={2960} street={"23-02 113th Dr, Queens Village"} city={"New York"}/>
              </div>
              <button onClick={() => scrollRight(0)}>
                <IoArrowForwardCircle className="property-cards-arrows" />
              </button>
            </div>
          </section>
          <section>
            <h2>Agent 2</h2>
            <div className="property-cards-contents">
              <button onClick={() => scrollLeft(1)}>
                <IoArrowBackCircle className="property-cards-arrows" />
              </button>
              <div className="property-wrapper" ref={(el) => (scrollContainerRefs.current[1] = el)}>
                <PropertyCard views={33} image={img7} price={"895,000"} area={4055} street={"71 Nassau St Unit 7D"} city={"New York"}/>
                <PropertyCard views={71} image={img8} price={"622,999"} area={4300} street={"74-25 43 Ave Unit 1B1434, Elmhurst"} city={"New York"}/>
                <PropertyCard views={33} image={img10} price={"3,300,000"} area={2026} street={"110 Riverside Dr Unit 8D"} city={"New York"}/>                           
                <PropertyCard  views={27} image={img9} price={"455,000"} area={3753} street={"177 Amity St Unit 873 Brooklyn"} city={"New York"}/>
                <PropertyCard views={71} image={img11} price={"725,000"} area={3400} street={"582 Grant Pl"} city={"New York"}/>
                <PropertyCard  views={27} image={img12} price={"658,000"} area={2473} street={"246 Sherman St"} city={"New York"}/>
              </div>
              <button onClick={() => scrollRight(1)}>
                <IoArrowForwardCircle className="property-cards-arrows" />
              </button>
            </div>
          </section>
          <section>
            <h2>Agent 3</h2>
            <div className="property-cards-contents">
              <button onClick={() => scrollLeft(2)}>
                <IoArrowBackCircle className="property-cards-arrows" />
              </button>
              <div className="property-wrapper" ref={(el) => (scrollContainerRefs.current[2] = el)}>
                <PropertyCard views={33} image={img13} price={"559,000"} area={3228} street={"0 Pennyfield Ave Unit 13C,Bronx"} city={"New York"}/>
                <PropertyCard views={71} image={img14} price={"486,500"} area={3100} street={"44 Heathcote Rd"} city={"New York"}/>
                <PropertyCard  views={27} image={img15} price={"629,000"} area={3153} street={"128 Memphis Ave"} city={"New York"}/>
                <PropertyCard views={33} image={img16} price={"732,000"} area={3466} street={"545 Pelham Manor Rd"} city={"New York"}/>                           
                <PropertyCard views={71} image={img17} price={"286,500"} area={3259} street={"145 Valentine Ln Unit 2E"} city={"New York"}/>
                <PropertyCard  views={27} image={img18} price={"888,000"} area={2473} street={"6-54 267th St County Road"} city={"New York"}/>
              </div>
              <button onClick={() => scrollRight(2)}>
                <IoArrowForwardCircle className="property-cards-arrows" />
              </button>
            </div>
          </section>
          <section>
            <h2>Agent 1</h2>
            <div className="property-cards-contents">
              <button onClick={() => scrollLeft(3)}>
                <IoArrowBackCircle className="property-cards-arrows" />
              </button>
              <div className="property-wrapper" ref={(el) => (scrollContainerRefs.current[3] = el)}>
              <PropertyCard views={33} image={img1} price={"729,000"} area={2026} street={"Ozone Park NY 11417  Ozone Park"} city={"New York"}/>
              <PropertyCard views={71} image={img2} price={"286,500"} area={3100} street={"170-25 118th Rd, Jamaica, NY 11434"} city={"New York"}/>
              <PropertyCard  views={27} image={img3} price={"888,000"} area={2473} street={"52-7 74th St Elmhurst, NY 11373"} city={"New York"}/>
              <PropertyCard views={33} image={img4} price={"770,000"} area={4037} street={"106-20 70th Ave Unit 2-B Forest Hills, NY 11375"} city={"New York"}/>                           
              <PropertyCard views={71} image={img5} price={"600,000"} area={3500} street={"1810 3rd Ave Unit A-8A"} city={"New York"}/>
              <PropertyCard  views={27} image={img6} price={"650,000"} area={2960} street={"23-02 113th Dr, Queens Village"} city={"New York"}/>
              </div>
              <button onClick={() => scrollRight(3)}>
                <IoArrowForwardCircle className="property-cards-arrows" />
              </button>
            </div>
          </section>
          <section>
            <h2>Agent 2</h2>
            <div className="property-cards-contents">
              <button onClick={() => scrollLeft(4)}>
                <IoArrowBackCircle className="property-cards-arrows" />
              </button>
              <div className="property-wrapper" ref={(el) => (scrollContainerRefs.current[4] = el)}>
                <PropertyCard views={33} image={img7} price={"895,000"} area={4055} street={"71 Nassau St Unit 7D"} city={"New York"}/>
                <PropertyCard views={71} image={img8} price={"622,999"} area={4300} street={"74-25 43 Ave Unit 1B1434, Elmhurst"} city={"New York"}/>
                <PropertyCard views={33} image={img10} price={"3,300,000"} area={2026} street={"110 Riverside Dr Unit 8D"} city={"New York"}/>                           
                <PropertyCard  views={27} image={img9} price={"455,000"} area={3753} street={"177 Amity St Unit 873 Brooklyn"} city={"New York"}/>
                <PropertyCard views={71} image={img11} price={"725,000"} area={3400} street={"582 Grant Pl"} city={"New York"}/>
                <PropertyCard  views={27} image={img12} price={"658,000"} area={2473} street={"246 Sherman St"} city={"New York"}/>
              </div>
              <button onClick={() => scrollRight(4)}>
                <IoArrowForwardCircle className="property-cards-arrows" />
              </button>
            </div>
          </section>
          <section>
            <h2>Agent 3</h2>
            <div className="property-cards-contents">
              <button onClick={() => scrollLeft(5)}>
                <IoArrowBackCircle className="property-cards-arrows" />
              </button>
              <div className="property-wrapper" ref={(el) => (scrollContainerRefs.current[5] = el)}>
                <PropertyCard views={33} image={img13} price={"559,000"} area={3228} street={"0 Pennyfield Ave Unit 13C,Bronx"} city={"New York"}/>
                <PropertyCard views={71} image={img14} price={"486,500"} area={3100} street={"44 Heathcote Rd"} city={"New York"}/>
                <PropertyCard  views={27} image={img15} price={"629,000"} area={3153} street={"128 Memphis Ave"} city={"New York"}/>
                <PropertyCard views={33} image={img16} price={"732,000"} area={3466} street={"545 Pelham Manor Rd"} city={"New York"}/>                           
                <PropertyCard views={71} image={img17} price={"286,500"} area={3259} street={"145 Valentine Ln Unit 2E"} city={"New York"}/>
                <PropertyCard  views={27} image={img18} price={"888,000"} area={2473} street={"6-54 267th St County Road"} city={"New York"}/>
              </div>
              <button onClick={() => scrollRight(5)}>
                <IoArrowForwardCircle className="property-cards-arrows" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
