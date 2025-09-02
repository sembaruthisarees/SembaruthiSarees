import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPhoneAlt, FaThLarge, FaShoppingCart, FaSpa, FaSearch, FaFire } from "react-icons/fa";

export const LandingPage = () => {
  return (
    <div className="main-page">
      <div id="LandingScreen" role="img" aria-label="Festive sarees landing background">
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
        <main className="LandingPageContent">
          <h2 className="SaleText">Diwali Sale is Live!!</h2>
          <p className="LandingSlogan">
            ஒவ்வொரு சேலையிலும் கைவினைத் திறமை மற்றும் பொலிவு—உங்களை கவரும் புதிய சேமிப்புகள்!
          </p>
          <div className="cta-row" role="group" aria-label="Primary actions">
            <Link to="/#latestcollection" className="cta primary hover" aria-label="View Latest Collections">
              <FaFire className="browseicon" /> View Latest Collections
            </Link>
            <Link to="/collections/1" className="cta ghost hover" aria-label="Browse All Collections">
              <FaSearch className="browseicon" /> Browse All
            </Link>
          </div>
          <footer className="landing-footer">
            <small className="note">• Festival offers • Free delivery within Tamil Nadu </small>
            <p className="note">(T&C Apply)</p>
          </footer>
        </main>
      </div>


    </div>
  );
};
