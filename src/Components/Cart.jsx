import React from 'react'
import '../css/Cart.css'
import { useContext,useState } from "react";
import { DataContext } from "../Utilities/DataProvider";


const Cart = () => {
  const {
    cartItemData,freeDeliveryCheck,cartCount,addToCart,removeFromCart,contactNumber,numberColor,numberChange,usernName,setuserName,
    totalPrice, discountApplied, totalDiscount, toPay,sendOrderRequest
  } = useContext(DataContext);
  const [errMessage,setErrorMessage] = useState('');
  const [checkout,setcheckout] = useState(false);
  const [address,setAddress] = useState('');
  const [orderMessage,setOrderMessage] = useState('');

  function sendOrderMessage(e){
    e.preventDefault()
    let Message = `-------------------%0A ORDER REQUEST%0A-------------------`
    Message= cartItemData.reduce((acc,item,index)=>{
      return acc+`%0A${index+1}. ${item.saree_code} %0ACount : ${cartCount(item.id)}%0APrice : ₹${Math.floor(item.discount_price)}`
    },Message)
    Message+=`%0A-------------------%0ATotal Price : ${totalPrice}%0ADiscount Reduction : ${totalDiscount}%0AFINAL PRICE : ${toPay}%0AName : ${usernName}%0AContact No : ${contactNumber}%0AztAddress : ${address}`
    sendOrderRequest(Message)
  }

  function handleCartIncreament(id){
    const item = cartItemData.find((item)=>item.id===id)
    if(item){
      if(item.stock_count > cartCount(item.id)){
        addToCart(item.id)
        setErrorMessage("")
        console.log(item.stock_count,"yes",cartCount(item.id))
      }
      else{
        setErrorMessage("Thats All we have in Stock")
      }
    }
  }
  function handleCartDecreament(id){
    removeFromCart(id)
    const item = cartItemData.find((item)=>item.id===id)
    if(item){
      if(item.stock_count >= cartCount(item.id)){
        setErrorMessage("")
      }
    }
  }
 return (
    <div id='cart'>
      <div className="CartHeading">
          <h2>CART SECTION</h2>
          <hr></hr>
      </div>
      <div className="stockCart">
        {
          (!checkout)?(
            (cartItemData.length===0)?
            <div className="noCartItems">Cart length is Zero</div>:
            <div className="CartItemsDisplay">
              {
                cartItemData.map((item)=>(
                  <div className="cartItemDisplay">
                    <div className="cartItemDisplayLeftSide">
                      <img src={item.thumbnail} alt={item.id+" IMAGE"}></img>
                      <p>[{item.saree_code}]</p>
                    </div>
                    <div className="cartItemDisplayRightSide">
                      <p className="cartItemOFFPercentage">{Math.floor(100-((item.discount_price/item.price)*100))}% OFF</p>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <div className="cartItemCountDisplay">
                        <button id='increamentItem' onClick={()=>handleCartIncreament(item.id)}>+</button>
                        <p>{cartCount(item.id)}</p>
                        <button id='decreamentItem' onClick={()=>handleCartDecreament(item.id)}>-</button>
                        <div className="errorDisplay">{errMessage}</div>
                      </div>
                      <div className="cartItemDisplayPrice">
                        <p>{item.discount_price}</p>
                        <del>{item.price}</del>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          ):""
        }
        {(cartItemData.length!==0)?
        <div className="cartSummaryDisplay">
          <div className="subHeading">
            <p id='cartSummary-Heading'>CART SUMMARY</p>
            <hr></hr>
          </div>
          <p>Total Price &#8377;{totalPrice}</p>
          <p>Discount &#8377;{totalDiscount} [ {discountApplied}% ]</p>
          <p>{(freeDeliveryCheck())?<del>Delivery Fee ₹50</del>:'Delivery Fee ₹50'}</p>
          <p>{(freeDeliveryCheck())?'':'(Free Delivery on Orders Above ₹499)'}</p>
          <p id='finalPayableAmount'>To Pay &#8377;{Math.floor(toPay)}</p>
          {(!checkout)?<button id='proceedToCheckOut' onClick={()=>setcheckout((prev=>!prev))}>PROCEED TO CHECKOUT</button>:
            <div className="deliveryDetails">
              <button id='proceedToCheckOut' onClick={()=>setcheckout((prev=>!prev))}>EDIT CART ITEMS</button>
              <div className="deliveryDetailsHeading">
                <h2 id='deliveryDetailsHeading'>Delivery Details</h2>
                <hr></hr>
              </div>
              <form onSubmit={sendOrderMessage}>
                <input className='deliveryDetailsUserName' name='USERNAME' type="text" placeholder="Your Name" value={usernName} onChange={(e)=>setuserName(e.target.value)} required />
                <input className='deliveryDetailsContactNumber' name='CONTACTNUMBER' placeholder="Your Contact Number (+91)"type="tel" style={{color:numberColor}} value={contactNumber} onChange = {numberChange} required />
                <textarea className='deliveryDetailsAddress' name='USERNAME' type="text" placeholder="Your Full Address with PINCODE" value={address} onChange={(e)=>setAddress(e.target.value)} required />
                <button id='placeOrderButton' type='submit' >PLACE ORDER REQUEST</button>
              </form>
            </div>
          }
        </div>:''
        }
      </div>
    </div>
  )
}

export default Cart