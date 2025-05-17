import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Get in Touch with Us</h2>
          <p>Contact smartRiverr in New Delhi for all your web and app development needs.</p>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message..." />
          </div>
          <button type="submit">Submit</button>
          <p className="recaptcha-text">
            This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
          </p>
        </form>
      </div>
      <div className="diagonal-divider-contact-section"/>
    </section>
  );
};

export default ContactSection;
