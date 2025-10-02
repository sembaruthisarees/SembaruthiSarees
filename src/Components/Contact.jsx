import React, { useState } from 'react'
import '../css/Contact.css';
import {DataContext} from "../Utilities/DataProvider";
import { useContext } from "react";
const Contact = () => {
        
    const {PHONENUMBER,EMAIL,contactNumber,setContactNumber,usernName,setuserName,numberColor,numberChange} = useContext(DataContext);
    const [messageChoice,setmessageChoice] = useState('whatsApp')
    const [message,setmessage] = useState('')

    function sendMessage(e){
        e.preventDefault()
        if(contactNumber.length<9){
        setContactNumber('10Digit Number required')
        return
        }
        const sendMessage = `Hi, I'm ${usernName}. ${message} %0A%0AThank you.%0A${usernName}%0AContact No : ${contactNumber}`
        if(messageChoice==='email'){
            window.location.href = `mailto:${EMAIL}?subject=Hello SembaruthiSarees&body=${sendMessage}`
        }
        else{
            window.location.href = `https://wa.me/${PHONENUMBER}?text=${sendMessage}`
        }
    }
    return (
        <div id='contact'>
            <div className="contactText">
                <div className="ContactUsHeading">
                    <h2>CONTACT US</h2>
                    <hr></hr>
                </div>
            </div>
            <div className="getContactDetails">
                <div className="contactIamgeLogo">
                    <div id='contactLogo'></div>
                    <p className='contactFirstText'>GET IN TOUCH!</p>
                    <p className="contactSubtitle">
                        Have questions or special requests? We’d love to hear from you!
                    </p>
                </div>
                
                <div className="contact-details">
                    <p className='formTitle'>Enter Your Details</p>
                    <form className="contact-form" onSubmit={sendMessage}>
                        <label htmlFor=''>Your Name</label>
                        <input className='formComponents' name='USERNAME' type="text" placeholder="Your Name" value={usernName} onChange={(e)=>setuserName(e.target.value)} required />
                        <label htmlFor=''>Contact Number (+91)</label>
                        <input className='formComponents' name='CONTACTNUMBER' placeholder="Your Contact Number (+91)"type="tel" style={{color:numberColor}} value={contactNumber} onChange = {numberChange} required />
                        <label htmlFor=''>Your Message</label>
                        <textarea className='formComponents' name='MESSAGE' placeholder="Your Message" rows="4" value={message}required onChange={(e)=>setmessage(e.target.value)}></textarea>
                        <div className='messageChoice formComponents'>
                            <div className='whatsAppMessageChoice'>
                                <input type='checkBox' checked={messageChoice==='whatsApp'} value="whatsApp" onChange={()=>setmessageChoice('whatsApp')}/>
                                <label htmlFor='whatsApp'>Whats App 💬</label>
                            </div>
                            <div className='emailMessageChoice'>
                                <input type='checkBox' value="email" checked={messageChoice==='email'} onChange={()=>setmessageChoice('email')}/> 
                                <label htmlFor='email'>Email ✉️</label>
                            </div>       
                        </div>
                        {(messageChoice==='whatsApp')?
                        <button type="submit" onSubmit={sendMessage}>Send WhatsApp Messsage 💬</button>:
                        <button type="submit" onSubmit={sendMessage}>Send Email ✉️</button>}
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact