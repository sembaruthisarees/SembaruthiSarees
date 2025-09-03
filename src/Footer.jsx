import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaPhoneAlt, FaThLarge, FaShoppingCart } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";   // Material Design
import { FaLanguage } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
        <div className='contactDetails'>
            Contact Details
        </div>
      <nav className="nav-group mobile-nav">
        <Link className="link" style={{ color: "#666666ff" }} to="/"><FaHome className="icons" title="Home" /></Link>
        <Link className="link" style={{ color: "#666666" }} to="/contact"><FaPhoneAlt className="icons" title="Contact Us" /></Link>
        <Link className="link" style={{ color: "#666666" }} to="/collections/1"><FaThLarge className="icons" title="Collections" /></Link>
        <Link className="link" style={{ color: "#666666" }} to="/cart"><FaShoppingCart className="icons" title="Cart" /></Link>
        <Link className="link" style={{ color: "#666666" }} to="/"><FaLanguage className="icons" title="lang" /></Link>
      </nav>
    </div>
  )
}

export default Footer