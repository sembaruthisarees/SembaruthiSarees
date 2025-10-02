import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Utilities/DataProvider";
import { FaShoppingCart} from "react-icons/fa";
import '../css/LatestCollection.css'
import { FaTruck, FaSmile, FaCreditCard, FaHandshake } from "react-icons/fa";
const LatestDesigns = () => {
  const {items,sendBuyMessage,latestcollectionref,handleAddToCart,cartCheck} = useContext(DataContext);
  return(
    <div id="latestCollections" ref={latestcollectionref}>
      <div className="latestCollectionsHeading">
        <h2>LATEST COLLECTIONS</h2>
        <hr></hr>
      </div>
      <div className="collectionsView">
        {
         [...items].sort((a, b) => b.id - a.id).slice(0, 5).map((item,index)=>(
            <div className="item" id={item.id}>
              <p className="itemOFFPercentage">{Math.floor(100-((item.discount_price/item.price)*100))}% OFF</p>
              <img src={item.thumbnail} alt="Saree"></img>
              <p className="itemCode">[{item.saree_code}]</p>
              <p className="itemName">{item.name}</p>
              <p className="itemDescription">{(item.description).substring(0,35)+"..."}</p>
              <p className="itemOfferPrice"> &#8377;{Math.floor(item.discount_price)} <del className="itemOriginalPrice">{item.price}</del></p>
              <div className="itemOptions">
                <p className="buyNow" onClick={()=>sendBuyMessage(item.id)}>Buy Now</p>
                <p
                    className="addToCart"
                    onClick={() =>handleAddToCart(item.id)}
                    style={{
                      backgroundColor: cartCheck(item.id) ? "#d2ffb4ff" : "#b10000",
                      color: cartCheck(item.id) ? "#000" : "#ffffffff",
                    }}
                  >
                    {cartCheck(item.id) ? <span>Go to Cart <FaShoppingCart className="icons" /></span> : "Add to Cart"}
                  </p>
              </div>
            </div>
          )
        )
        }
      </div>
      <div className="routetoCollection">
        <Link to="/collections" id='viewall'>Show all Collections</Link>
      </div>
          <div className="girdviewicons mobileON">
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
    </div>

  )
}

export default LatestDesigns