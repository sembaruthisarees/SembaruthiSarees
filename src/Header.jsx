import React from 'react'
import { FaHome, FaPhoneAlt, FaThLarge, FaShoppingCart, FaSpa} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div id='header'>
        <header className="site-header">
          <h1 className="brand">
            <FaSpa className="brandicon" /> <div className="logo"></div> செம்பருந்தி SAREES
          </h1>
          {/* Desktop nav with icons + text */}
          <nav className="nav-group desktop-nav">
            <Link className="link hover" to="/">
              <FaHome className="icons" title="Home" /> <span>Home</span>
            </Link>
            <Link className="link hover" to="/contact">
              <FaPhoneAlt className="icons" title="Contact Us" /> <span>Contact Us</span>
            </Link>
            <Link className="link hover" to="/collections/1">
              <FaThLarge className="icons" title="Collections" /> <span>Collections</span>
            </Link>
            <Link className="link hover" to="/cart">
              <FaShoppingCart className="icons" /> <span>Cart</span>
            </Link>
          </nav>
        </header>
    </div>
  )
}

export default Header