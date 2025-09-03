import React from 'react'
import './Contact.css';
const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id='contact'>
        <div className="contact-container">
        <h2>Get in Touch ✉️</h2>
        <p className="subtitle">
            Have questions or special requests? We’d love to hear from you!
        </p>

        <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
        </form>

        <div className="contact-details">
            <p>📞 Phone: +91 9894847893</p>
            <p>📧 Email: support@sembaruthisarees.com</p>
        </div>

        <footer className="footer">
            <p>© {currentYear} Sembaruthi Sarees. All rights reserved.</p>
        </footer>
        </div>
    </div>
  )
}

export default Contact