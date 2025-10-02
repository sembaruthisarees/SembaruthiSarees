import {createContext } from 'react';
import { useState } from 'react';
import ITEMS from "./items";
import { useRef,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
export const DataContext = createContext();


export default function DataProvider ({children}) {
    const navigate = useNavigate()
    const latestcollectionref = useRef(null);
    const [items,setitems] = useState(ITEMS);
    const [usernName,setuserName] = useState('')
    const [contactNumber,setContactNumber] = useState('')
    const [cartItems, setcartItems] = useState(() => {
      const val = readCookie();
      return (val.length !== 0) ? val : items.map((item) => ({ id: item.id, count: 0 }));
    });
    const [cartItemData,setCartItemData] = useState([]);
    const PHONENUMBER = +919894847893
    const EMAIL = 'sembaruthisarees.tn@gmail.com'

  useEffect(()=>{
    saveCookie()
    if(cartItems.length!==0){
      let temp =[]
      cartItems.forEach((item)=>{
        if(item.count!==0){
          let val = items.find((i)=>(i.id===item.id))
          temp = [...temp,val]
        }
      })
      setCartItemData(temp)
      console.log(temp)
    }
  },[cartItems])

  function addToCart(id){
    setcartItems(
      cartItems.map((item)=>
        (item.id===id)?{...item,count:item.count+1}:item)
    )
  }
  function removeFromCart(id){
    setcartItems(
    cartItems.map((item)=>
      (item.id===id && item.count!==0)?{...item,count:item.count-1}:item
    ))
  }

  function getCartSize(){
    return cartItems.reduce((acc,item)=>item.count+acc,0)
  }

  function cartCount(id){
    const item = cartItems.find((item)=>item.id===id)
    return (item)?item.count:0
  }

  function cartCheck(id){
    const item = cartItems.find((item)=>item.id===id)
    return (item)?(item.count!==0):false
  }

  function handleAddToCart(id){
    if(cartCheck(id)){
      navigate("/cart")     
    }
    else{
      addToCart(id)
    }
  }

  function saveCookie(){
    if(cartItems){
      console.log(cartItems)
      console.log("Cookie Updated")
      const date = new Date();
      date.setTime(date.getTime()+(1000*60*60*24*365))
      const expiryDate = date.toUTCString()
      document.cookie = "cart="+encodeURIComponent(JSON.stringify(cartItems))+";"+"expires="+expiryDate+";path=/";
    }
  }

  function readCookie(){
    const decodedCookie = decodeURIComponent(document.cookie)
    const parseText = decodedCookie.split(';').find((c)=>c.startsWith('cart='))

    if(parseText){
      console.log("Hi"+JSON.parse(parseText.split('=')[1]))
      return JSON.parse(parseText.split('=')[1])
    }
    return []
  }

  function sendOrderRequest(message){
    window.location.href = `https://wa.me/${PHONENUMBER}?text=${message}`
  }

  function sendBuyMessage(id){
    const message = `Hello,%0AI am interested in purchasing PRODUCT ID : ${id}. %0ACould you please confirm the availability and share the details?%0AThank you!`;
    window.location.href = `https://wa.me/${PHONENUMBER}?text=${message}`
  }

  function gotoLatestCollections() {
    latestcollectionref.current.scrollIntoView({ behavior: "smooth" });
  }
// --------------FOR CONTACT US PAGE -----------------------
  const [numberColor,setnumberColor] = useState("#000000")

  function numberChange(e){
      setContactNumber(e.target.value)
      if(contactNumber.length<9){
      setnumberColor("#ff0101ff")
      return
      }
      else{
          setnumberColor("#000000ff")
      }
  }
//------------------------------FOR CART PAGE -------------------

  const [totalPrice, setTotalPrice] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [toPay, setToPay] = useState(0);

  function freeDeliveryCheck(){
    console.log(toPay<499)
    return toPay>499
  }
  function updateCartPrice(){
    const  sum = cartItemData.reduce((acc,item)=>{
        const itemValue = cartItems.find((i)=>i.id===item.id)
        if (itemValue){
          acc.totalPrice += itemValue.count*item.price;
          acc.discountPrice+= itemValue.count*item.discount_price;
        }
        return acc
      },({totalPrice:0,discountPrice:0}))
    
    if(sum){
      setTotalPrice(sum.totalPrice)
      setToPay(()=>(freeDeliveryCheck())?sum.discountPrice:sum.discountPrice+50)
      const offer = sum.totalPrice-sum.discountPrice
      setTotalDiscount(Math.floor(offer))
      setDiscountApplied(()=>{
        return Math.floor((offer/sum.totalPrice)*100)
      })
    }
  }
  useEffect(()=>{
    updateCartPrice()
  },[cartItemData])
    return (
        <DataContext.Provider value = {{
            items,setitems,ITEMS,
            latestcollectionref,gotoLatestCollections,cartItems,cartItemData,
            PHONENUMBER,EMAIL,sendBuyMessage,navigate,handleAddToCart,
            addToCart,cartCheck,removeFromCart,getCartSize,cartCount,
            usernName,setuserName,contactNumber,setContactNumber,
            numberColor,setnumberColor,numberChange,freeDeliveryCheck,
            totalPrice, discountApplied, totalDiscount, toPay,
            setTotalPrice, setDiscountApplied,
            setTotalDiscount, setToPay,sendOrderRequest
            }}>
            {children}
        </DataContext.Provider>
    )
}