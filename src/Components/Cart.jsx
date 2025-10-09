import React from 'react'
import '../css/Cart.css'
import { useContext,useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { DataContext } from "../Utilities/DataProvider";
import { Link } from 'react-router-dom';


const Cart = () => {
  const {
    cartItemData,freeDeliveryCheck,cartCount,addToCart,removeFromCart,contactNumber,numberColor,numberChange,usernName,setuserName,
    totalPrice, discountApplied, totalDiscount, toPay,sendOrderRequest
  } = useContext(DataContext);
  const [errMessage,setErrorMessage] = useState('');
  const [checkout,setcheckout] = useState(false);
  const [address,setAddress] = useState('');
  const [errID,seterrID] = useState(-1);

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
        seterrID(id)
        console.log(item.stock_count,"yes",cartCount(item.id))
      }
      else{
        seterrID(id)
        setErrorMessage("Thats All we have in Stock")
      }
    }
  }
  function handleCartDecreament(id){
    removeFromCart(id)
    const item = cartItemData.find((item)=>item.id===id)
    if(item){
      if(item.stock_count >= cartCount(item.id)){
        seterrID(id)
        setErrorMessage("")
      }
    }
  }
 return (
    <div id='cart'>
      <div className="cartHeading">
          <h2>CART SECTION</h2>
          <hr id='cartRuler'></hr>
      </div>
      <div className="stockCart">
        {
          (!checkout)?(
            (cartItemData.length===0)?
            <div className="noCartItems">
              <div id="nocartIamge"></div>
              <p>Your cart is Empty ! Try addig Some items</p>
              <Link id='carShoppingButton'to='/collections'>Start Shopping</Link></div>:
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
                      <p id='cartItemDesc'>{item.description}</p>
                      <div className="cartItemCountDisplay">
                        <p id='increamentItem' onClick={()=>handleCartIncreament(item.id)}>< FaPlus/></p>
                        <p id='cartitemcount'>{cartCount(item.id)}</p>
                        <p id='decreamentItem' onClick={()=>handleCartDecreament(item.id)}><FaMinus/></p>
                        <div className="errorDisplay">{(errID===item.id)?errMessage:''}</div>
                      </div>
                      <div className="cartItemDisplayPrice">
                        <p>&#8377;{Math.floor(item.discount_price)}</p>
                        <del>{item.price}</del>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          ):
          <div className='deliveryDetailsFrame'>
              <div className="subHeading">
                <p id='deliveryDetailsHeading'>DELIVERY DETAILS</p>
                <hr></hr>
              </div>
              <form className='DeliveryDetails' onSubmit={sendOrderMessage}>
                <input className='deliveryDetailsUserName DeliveryDetailscomponent ' name='USERNAME' type="text" placeholder="Your Name" value={usernName} onChange={(e)=>setuserName(e.target.value)} required />
                <input className='deliveryDetailsContactNumber DeliveryDetailscomponent' name='CONTACTNUMBER' placeholder="Your Contact Number (+91)"type="tel" style={{color:numberColor}} value={contactNumber} onChange = {numberChange} required />
                <textarea className='deliveryDetailsAddress DeliveryDetailscomponent' name='USERNAME' type="text" placeholder="Your Full Address with PINCODE" value={address} onChange={(e)=>setAddress(e.target.value)} required />
                <button id='placeOrderButton' type='submit' >PLACE ORDER REQUEST</button>
              </form>
          </div>
        }
        {(cartItemData.length!==0)?
        <div className="cartSummaryDisplay">
          <div className="subHeading">
            <p id='cartSummary-Heading'>CART SUMMARY</p>
            <hr></hr>
          </div>
          <div className="cartpricedisplay">
            <p>Total Price</p>
            <p className='summaryprice'>₹{totalPrice}</p>
          </div>

          <div className="cartpricedisplay">
            <p>Discount Reduction</p>
            <p className='summaryprice'>- ₹{totalDiscount}</p>
          </div>

          <div className="cartpricedisplay">
            <p>Delivery Fee</p>
            <p className='summaryprice' >{freeDeliveryCheck() ? <del>₹50</del> : '₹50'}</p>
          </div>
          <div className="cartpricedisplay">
            <p id='deliveryMessage' >{(freeDeliveryCheck())?'':'Free Delivery on Orders Above ₹499'}</p>
          </div>

          <div className="cartpricedisplay">
            <p>To Pay</p>
            <p id="finalPayableAmount" className='summaryprice' >₹{Math.floor(toPay)}</p>
          </div>

          {(!checkout)?<button id='proceedToCheckOut' onClick={()=>setcheckout((prev=>!prev))}>PROCEED TO CHECKOUT</button>:
            <div className="deliveryDetails">
              <button id='proceedToCheckOut' onClick={()=>setcheckout((prev=>!prev))}>EDIT CART ITEMS</button>

            </div>
          }
        </div>:''
        }
      </div>
    </div>
  )
}

export default Cart