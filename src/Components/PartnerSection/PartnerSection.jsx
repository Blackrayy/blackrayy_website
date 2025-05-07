import React from "react";
import "./PartnerSection.css";
import img1 from "../../../public/Images/img1.jpg";  
// import Leftdivider from "../Divider/Leftdivider";
const PartnerSection = () => {
  const logos = [
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    
  ];

  return (<>
    <section className="carousel-section">
    

      <div className="carousel-wrapper">
        <h2>Transforming Ideas into Reality</h2>
        <div className="carousel-track">
          {[...logos, ...logos].map((src, idx) => (
            <div key={idx} className="carousel-logo">
              <img src={src} alt={`Logo ${idx}`} />
            </div>
          ))}
        </div>
      </div>
{/* <Leftdivider/> */}
      <div className="diagonal-divider-partner-section"/>
    </section>
    {/* <div className="partner-divider-bottom">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#000000" points="0,0 100,0 100,100" />
    </svg>
  </div> */}
  </>
  );
};

export default PartnerSection;
