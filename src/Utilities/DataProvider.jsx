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
    const [cartItems, setcartItems] = useState(() => {
      const val = readCookie();
      return (val.length !== 0) ? val : items.map((item) => ({ id: item.id, count: 0 }));
    });
    const PHONENUMBER = +919894847893
    const EMAIL = 'sembaruthisarees.tn@gmail.com'

  useEffect(()=>{
    saveCookie()
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

  function sendBuyMessage(id){
    const message = `Hello,\nI am interested in purchasing PRODUCT ID : ${id}. \nCould you please confirm the availability and share the details?\nThank you!`;
    window.location.href = `https://wa.me/${PHONENUMBER}?text=${message}`
  }

  function gotoLatestCollections() {
    latestcollectionref.current.scrollIntoView({ behavior: "smooth" });
  }

    return (
        <DataContext.Provider value = {{
            items,setitems,ITEMS,
            latestcollectionref,gotoLatestCollections,
            PHONENUMBER,EMAIL,sendBuyMessage,navigate,handleAddToCart,
            addToCart,cartCheck,removeFromCart,getCartSize,cartCount}}>
            {children}
        </DataContext.Provider>
    )
}