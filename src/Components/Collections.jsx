import "../css/Collections.css";
import { useContext } from "react";
import { DataContext } from "../Utilities/DataProvider";

export default function Collections(){

  const {items,setitems, sendBuyMessage,cartCheck,handleAddToCart} = useContext(DataContext);
  const options = [ "Price High to Low", "Top Rated", "Popularity","Price Low to High"];
  const values = ['discount_price',"rating","noOfOrders"]

  function optionChange(e){
    const index = options.indexOf(e.target.value) 
    if(index<2){
      setitems([...items].sort((a,b)=>b[values[index]]-a[values[index]]))
    }
    else
      setitems([...items].sort((a,b)=>a['discount_price']-b['discount_price']))
  }
  return(
    <div className="Collections">
      <div className="collectionsHeading">
        <h2>ALL EVERLASTING COLLECTIONS</h2>
        <hr></hr>
        <div className="collectionssortby">
          <label htmlFor="sortby">Sort by : </label>
          <select onChange={optionChange}>
            <option>Price High to Low</option>
            <option>Top Rated</option>
            <option>Popularity</option>
            <option>Price Low to High</option>
          </select>
        </div>
      </div>
      <div className="collectionsView">
        {
          items.map((item,index)=>(
            <div className="item" id={item.id}>
              <p className="itemOFFPercentage">{Math.floor(100-((item.discount_price/item.price)*100))}% OFF</p>
              <img src={item.thumbnail} alt="Saree"></img>
              <p className="itemCode">[{item.saree_code}]</p>
              <p className="itemName">{item.name}</p>
              <p className="itemDescription">{(item.description).substring(0,30)+"..."}</p>
              <p className="itemOfferPrice"> &#8377;{Math.floor(item.discount_price)} <del className="itemOriginalPrice">{item.price}</del></p>
              <div className="itemOptions">
                <p className="buyNow" onClick={()=>sendBuyMessage(item.id)}>Buy Now</p>
                <p
                    className="addToCart"
                    onClick={() => handleAddToCart(item.id)}
                    style={{
                      backgroundColor: cartCheck(item.id) ?  "#d2ffb4ff" : "#b10000",
                      color: cartCheck(item.id) ? "#000" : "#ffffffff",
                    }}
                  >
                    {cartCheck(item.id) ? "✅ Added" : "Add to Cart"}
                  </p>
              </div>
            </div>
          )
        )
        }
      </div>
    </div>
  )
}