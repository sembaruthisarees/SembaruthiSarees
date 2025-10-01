import { Link } from "react-router-dom";
import '../css/Landing.css';
import {DataContext} from "../Utilities/DataProvider";
import { useContext } from "react";
import { FaSearch, FaTruck, FaSmile, FaCreditCard, FaHandshake } from "react-icons/fa";
export const LandingPage = () => {

const { gotoLatestCollections } = useContext(DataContext);
  return (
    <div className="main-page">
      <div className="landingImage"></div>
      <div id="LandingScreen" role="img" aria-label="Festive sarees landing background">
        <main className="LandingPageContent">
          <h2 className="SaleText">Diwali Sale is Live!!</h2>
          <p className="LandingSlogan">
            ஒவ்வொரு சேலையிலும் கைவினைத் திறமை மற்றும் பொலிவு—உங்களை கவரும் புதிய சேமிப்புகள்!
          </p>
          <div className="landingButtons" role="group" aria-label="Primary actions">
            <Link to="#" className="cta primary-hover" onClick={gotoLatestCollections}aria-label="View Latest Collections">
              {/* <FaFire className="browseicon" />  */}
              View Latest Collections
            </Link>
            <Link to="/collections" className="cta secondary-hover" aria-label="Browse All Collections">
              <FaSearch className="browseicon" /> Browse All
            </Link>
          </div>
          <footer className="landing-footer">
            <small className="note">• Festival offers • Free delivery within Tamil Nadu </small>
            <small className="note">(T&C Apply)</small>
          </footer>
          <div className="girdviewicons windowsON">
            <div className="girdview freeDelivery">
              <FaTruck aria-label="Truck" className="icon"/>  
              Free Delivery All over TamilNadu
            </div>
            <div className="girdview happyCustomers">
              <FaSmile aria-label="Truck" className="icon"/>
              100+ Happy Customers from Tamilnadu
            </div>
            <div className="girdview freeDelivery">
              <FaCreditCard aria-label="Truck" className="icon"/>
              COD & Online Paymets Available
            </div>
            <div className="girdview trustable">
              <FaHandshake aria-label="Truck" className="icon"/>
              Affordable & Trustable Products
            </div>
          </div>
        </main>
      </div>

    </div>
  );
};
