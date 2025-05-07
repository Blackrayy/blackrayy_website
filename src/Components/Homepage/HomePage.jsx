import React from 'react';
import './HomePage.css'; // Link the CSS file
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import PartnersSection from '../PartnerSection/PartnerSection';
import ServiceSection from '../ServiceSection/ServiceSection';  
import Projects from '../Projects/Projects';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import WhyChoose from '../Whychooseus/Whychoose';
// import Optional from '../Optional/Optional';
// import rightdivider from '../Divider/Rightdivider';
import Optional from '../Optional/optional';
import OurProcess from '../Ourprocess/Ourprocess';

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    {/* <rightdivider/> */}
     <PartnersSection/>
     <WhyChoose/>
    <ServiceSection/>
     <Projects/>
    <ContactSection/>
    {/* <Optional/> */}
    <OurProcess/>
    <Footer/> 
    </>
  );
};

export default HomePage;
