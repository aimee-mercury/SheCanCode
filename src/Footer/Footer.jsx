import React from 'react'
import './Footer.css'
import soma from '../assets/soma 2.png'
import unicef from '../assets/unicef 1.png'
import mastercard from '../assets/mastercard 1.png'
import nesa from '../assets/nesa 1.png'
import shecancode from '../assets/shecancode 1.png'
import logo from '../assets/1.jpg'
import { IoLocationSharp } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <>
    <div className='footer-container-background-image'>
    {/* <div className='footer-partners-section'>
      <div className='footer-partners-logos'>
      <div className='footer-partners'>
        <h1 className='footer-ourpartner'>Our Partner</h1>
        <p className='footer-partner-line'></p>
      </div>
      <div className='footer-logos'>
      <div>
        <a href="https://soma.rw/"><img src={soma} alt="soma logo" className='soma-logo'/></a>
      </div>
      <div>
      <a href="https://www.unicef.org/"><img src={unicef} alt="unicef logo" className='unicef-logo'/></a>
      </div>
      <div>
      <a href="https://www.mastercard.com"><img src={mastercard} alt="mastercard logo" className='mastercard-logo'/></a>
      </div>
      <div>
      <a href="https://www.nesa.gov.rw"><img src={nesa} alt="nesa logo" className='nesa-logo'/></a>
      </div>
      <div>
      <a href="https://www.shecancodeschool.org/"><img src={shecancode} alt="shecancode logo" className='shecancode-logo'/></a>
      </div>
      </div>
      </div>
      </div> */}
    <div className='footer-logo-heading'>
    <div>
      <img src={logo} alt="Our logo" className='ourlogo'/>
    </div>
    <div className='footer-heading'>
      <h1 className='footer-header'>Library & Book store</h1>
      <p className='footer-heading-line'></p>
    </div>
    </div>
    <div className='footer-first-paragraphs'>
    <div className='first-paragraphs'>
      <p>Don’t hesitate to reach us out, we’re here to help.And follow us</p>
      <p>On our social medias:</p>
    </div>
    <div className='second-paragraphs'>
    <p className='footer-location-icon'><a href=""><IoLocationSharp className='location-icon'/></a></p>
    <p className='footer-street'>KG 545 St <span className='footer-kigali'>Kigali - Rwanda </span></p>
    </div>
    </div>
    <div className='footer-follow-icons'>
     <div className='instagram-icon'><a href="https://www.instagram.com"><BsInstagram /></a></div>
      <div className='facebook-icon'><a href="https://www.facebook.com"> <FaFacebook /></a></div>
      <div className='twitter-icon'><a href="https://twitter.com/"> <FaTwitter /></a></div>
      <div className='linkedin-icon'><a href="https://www.linkedin.com/"> <FaLinkedin /></a></div>
    </div>
    <div className='footer-nav'>
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        <a href="#About">
         <p>About Us</p>
        </a>
      </div>
      <div>
        <a href="/">Collection</a>
      </div>
      <div>
        <a href="#Visit">Visit Us</a>
      </div>
      <div>
        <a href="/supportus">Support Us</a>
      </div>
    </div>
    <div className='footer-line-copyright'>
      <div className='footer-copyright'>
        <p>copyright <LuCopyright className='copyright-icon'/> wisdomlibrary. All rights reserved</p>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer
