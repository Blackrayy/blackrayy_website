import React from 'react';
import './ServiceSection.css';

const services = [
  {
    title: "Custom Website Development",
    description: "Crafting bespoke websites tailored to your unique brand identity and business needs.",
    icon: "💻"
  },
  {
    title: "Mobile App Design",
    description: "Designing intuitive and engaging mobile applications for both iOS and Android platforms.",
    icon: "📱"
  },
  {
    title: "E-commerce Solutions",
    description: "Building scalable and secure e-commerce platforms to enhance your online sales presence.",
    icon: "🛒"
  },
  {
    title: "UI/UX Consulting",
    description: "Providing expert analysis and insights to improve user experience and interface design.",
    icon: "🎨"
  },
  {
    title: "Responsive Web Design Services",
    description: "Creating adaptable websites that offer seamless experiences across all devices and screen sizes.",
    icon: "🖥️"
  },
  {
    title: "Custom Software Integration",
    description: "Streamlining operations with tailored software solutions that integrate with existing systems.",
    icon: "🔗"
  }
];

const ServiceSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-heading">Transform Ideas into Digital Reality</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="divider-diagonal-service-section"></div>
    </section>
  );
};

export default ServiceSection;
