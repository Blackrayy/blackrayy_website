import React from "react";
import "./HeroSection.css";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
// import Rightdivider from "../Divider/Rightdivider";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Expert Mobile App<br />Development Hub</h1>
          <p>
            Unlock innovation with blackRayy's premium mobile app solutions, transforming ideas into
            cutting-edge digital experiences in New Delhi.
          </p>
          <button>Start Your Project</button>
        </div>

        <div className="hero-images">
          <img
            src={img2}
            alt="Design Planning"
          />
          <img
            src={img1}
            alt="Developer Coding"
          />
          <img
            src={img3}
            alt="App Testing"
            className="wide-img"
          />
        </div>
      </div>
      {/* <div className="diagonal-divider">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="#000000" points="0,100 100,0 100,100" />
          </svg>
        </div> */}

      <div className="hero-section-diagonal-divider" />
      
    </section>
  );
};

export default HeroSection;
