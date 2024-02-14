import React from 'react'
import java from '../../../src/assets/java.jpg'
import data from '../../../src/assets/data.jpg'
import math from '../../../src/assets/math.jpg'
import phys from '../../../src/assets/phys.jpg'
import reactt from '../../../src/assets/reactt.jpg'
import android from '../../../src/assets/android.jpg'
import android11 from '../../../src/assets/android11.jpg'
import android12 from '../../../src/assets/android12.jpg'
import php1 from '../../../src/assets/php1.jpg'
import php2 from '../../../src/assets/php2.jpg'
import './Academic.css'
import {Link} from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Navigation from '../../components/Navigation'
// import Biography from '../Biography/Biogr'

function Academics() {
  return (
    <div>
    <Navigation/>
    <div className='he'>
    <div className='products-heading'><h2>Academics</h2></div>
  <div className='bookproducts'>
     <div className='image-book-products-1'>
      <div><img src={java} alt="" /></div>
      <div className='title-book-products-1'>
       <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div> 
    <div className='image-book-products-2'>
    <div><img src={data} alt="" /></div>
    <div className='title-book-products-2'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div className='image-book-products-3'>
    <div><img src={math} alt="" /></div>
    <div className='title-book-products-3'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={phys} alt="" /></div>
    <div className='title-book-products-4'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={reactt} alt="" /></div>
    <div className='title-book-products-4'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
  </div>
  <div className='bookproducts'>
    <div className='image-book-products-1'>
      <div><img src={android} alt="" /></div>
      <div className='title-book-products-1'>
       <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div className='image-book-products-2'>
    <div><img src={android11} alt="" /></div>
    <div className='title-book-products-2'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div className='image-book-products-3'>
    <div><img src={android12} alt="" /></div>
    <div className='title-book-products-3'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={php1} alt="" /></div>
    <div className='title-book-products-4'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={php2} alt="" /></div>
    <div className='title-book-products-4'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
  </div>
  <Footer/>

  </div>
  </div>
  )
}

export default Academics
