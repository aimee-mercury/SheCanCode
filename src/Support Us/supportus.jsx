import React from 'react'
import image from '../assets/unsplash_zvKx6ixUhWQ.jpg'
import image1 from '../assets/clay-banks-GX8KBbVmC6c-unsplash 1.jpg'
import image2 from '../assets/istockphoto-1495321240-2048x2048 1.jpg'
import { Link } from 'react-router-dom'
import './Supportus.css'

function Supportus() {
  return (
    <>
    <div className='supportus-section' id='support' data-aos="fade-up" data-aos-duration={2000}>
    <div className='supportus-heading'><h2>Support Us</h2></div>
      <div className='supportus-first-section'>
        <div className='support-image1'><img src={image} alt="" /></div>
        <div className='supportus-heading-para'>
            <div><h3>Giving to your Wisdom Library</h3></div>
            <div><p>Our collections are extraordinary. <br /> Your support can help us share <br /> them.</p></div>
            <div className='visitus-button'>
            <Link to='/visitus'><button>Visit Us</button></Link>
            </div>
        </div>
      </div>
      <div className='supportus-second-section'>
        <div className='first-section'>
        <div className='support-image2'><img src={image1} alt="" /></div>
        <div className='support-image3'><img src={image2} alt="" /></div>
        </div>
        <div className='second-section'>
         <div className='supportus-image-titles'>
            <h3>Become a volunteer</h3>
            <p>The Volunteer program offers you an opportunity to play an active role in supporting and promoting the  work of the Library.</p>
         </div>
         <div className='supportus-image-titles2'>
            <h3>Become a friend</h3>
            <p>The Friends of the Wisdom Library share a passion for the Library and its collections.</p>
        </div>
        </div>
      </div>
      <div className='supportus-button'>
      <Link to='/supportus'><button>Support Us</button></Link>
      </div>
    </div>
    </>
  )
}

export default Supportus
