
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbArrowBack } from "react-icons/tb";
import React from 'react'
import './Supportform.css'
import Footer from "../Footer/Footer";
import Navigation from "../components/Navigation";


function Support() {
  return (   
<>
<Navigation/>
<div className="container1">

<div className='supportus'>
  <h2>SupportUs</h2>
  

  <div className="kasuku">
    <ul>
      <li><CiLocationOn /></li>
      <li> <IoIosCall /></li>
      <li> <MdOutlineMail /></li>
    </ul>
    <ul>
      <li>Kigali-Rwanda</li>
      <li>+250-782-467-899</li>
      <li>readrwa@gmail.com</li>
    </ul>
  </div>
   {/* <button className="btnsupport">Back<TbArrowBack className="bu" /></button>  */}

 </div>
 <div className="supportus2">
    <h1 className="spp"> Raise your hand  to donate</h1> <br /><br />
    <div className='supportname'>
                <div className='supportfirst'>
              <label className='support-firstname-label'>FirstName</label><br/><br/>
            <input type='text' required className='supportfirst2'></input>
            </div>
            <div className='supportsecond'>
            <label className="support-surname-label">LastName</label><br/><br/>
            <input type='text' required className='supportsecond3'></input>
            </div>
            </div> 
            <div className="two">
            <div className='supportthird'>
              <label className='support-third-label' required>Email</label><br/><br/>
            <input type='text' required className='supportfirst4'></input>
            </div>
            <div className='supportfouth'>
              <label className='support-fouth-label' required>Method of payments</label><br/><br/>
      <select name="" id="seee">
        
      <option value="">credit card</option>
      <option value="">visa card</option>
      <option value="">payroll</option>
      
   
    
     </select>
     </div>
     </div>
     <div className='supportfith'>
              <label className='support-fith-label'>Leave A Message</label><br/><br/>
              <textarea className="te"></textarea><br/><br/>
            </div>
            <button className="bu" >Submit</button>
            
            </div> 
</div>

<Footer/>
</>

  )
}

export default Support;