
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TbArrowBack } from "react-icons/tb";
import React from 'react' 
import './Visit.css'
import Footer from "../Footer/Footer";
import Navigation from "../components/Navigation";


function Support() {
  return (   
< >

<Navigation/>

<div className="objj">
<div className='vistus'>
  <h2 className="vi">Visitus</h2>
  

  <div className="kasuku1">
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


 </div>
 <div className="vistus2">
    <h3 className="sppp"> Book Your place In our Book Shop </h3> <br /><br />
    <div className='vistusname'>
                <div className='vistusfirst'>
              <label className='vistus-firstname-label'>FullName</label><br/><br/>
            <input type='text' required className='vistusfirst2'></input>
            </div>
            {/* <div className='vistussecond'>
            <label className="vitus-surname-label">LastName</label><br/><br/>
            <input type='text' required className='vistussecond3'></input>
            </div> */}
            </div> 
            <div className="vistus3">
            <label className="enn" >Email</label><br/>
            <input type="email"  required className='vistusthirdd' name="email" />

            </div>
            {/* <div className="twoo">
    
            <div className='vistusfouth'>
              <label className='vistus-fouth-label' required>Method of payments</label><br/>
      <select name="" id="senn">
        
      <option value="">credit card</option>
      <option value="">visa card</option>
      <option value="">payroll</option>
     </select>
     </div><br /><br />
     <div className='vistusthird'>
              <label className='vistus-third-label' required>Number of people</label><br/>
            <input type='number' required className='vistusfirst4'></input>
            </div>
     </div> */}
     <div className='vistusfith'>
              <label className='vistus-fith-label'>Leave A Message</label><br/>
              <textarea className="ten"></textarea><br/><br/><br />
              <button className="bun" >Submit</button>
            </div> <br/><br/>
           
           
       
            
       </div> 
      

</div>




<Footer/>
</>

  )
}

export default Support;