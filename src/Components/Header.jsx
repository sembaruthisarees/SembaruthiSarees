import { FaHome, FaPhoneAlt, FaThLarge, FaShoppingCart, FaSpa} from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../css/Header.css'
import LOGO from '../images/others/logo.jpg';
import {DataContext} from "../Utilities/DataProvider";
import { useContext } from "react";
const Header = () => {

  const {getCartSize} = useContext(DataContext);
  return (
    <div id='header'>
        <header className="site-header">
          <h1 className="brand">
            {/* <FaSpa className="brandicon" />  */}
            <img src={LOGO} className="brandicon"></img>SEMBARUTHI SAREES
          </h1>
          {/* Desktop nav with icons + text */}
          <nav className="nav-group desktop-nav">
            <Link className="nav-link" to="/">
              <FaHome className="icons" title="Home" /> <span>HOME</span>
            </Link>
            <Link className="nav-link" to="/contact">
              <FaPhoneAlt className="icons" title="Contact Us" /> <span>CONTACT US</span>
            </Link>
            <Link className="nav-link" to="/collections">
              <FaThLarge className="icons" title="Collections" /> <span>COLLECTIONS</span>
            </Link>
            <Link className="nav-link cart" to="/cart">
              <FaShoppingCart className="icons" /> CART        {(getCartSize()===0)?"":<span className="cartCount">{getCartSize()}</span>}     
            </Link>

          </nav>
        </header>
    </div>
  )
}

export default Header