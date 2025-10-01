import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'
import { FaHome, FaPhoneAlt, FaThLarge, FaShoppingCart } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='mainFooter'>
      <nav className="mobile-nav">
        <Link className="link" style={{ color: "#666666ff" }} to="/"><FaHome className="icons" title="Home" /></Link>
        <Link className="link" style={{ color: "#666666" }} to="/contact"><FaPhoneAlt className="icons" title="Contact Us" /></Link>
        <Link className="link" style={{ color: "#666666" }} to="/collections"rte><FaThLarge className="icons" title="Collections" /></Link>
        <Link className="link" style={{ color: "#666666" }} to="/cart"><FaShoppingCart className="icons" title="Cart" /></Link>
        <Link className="link" style={{ color: "#666666" }} to="/"><FaLanguage className="icons" title="lang" /></Link>
      </nav>
      <footer className="footer">
          <p>📞 Phone : +91 9894847893</p>
          <p>📧 Email : sembaruthisarees.tn@gmail.com</p>
          <p id='copyrights'>© {currentYear} Sembaruthi Sarees. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer