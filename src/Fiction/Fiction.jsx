import React from 'react'
import chidren4 from '../assets/chidren4.png'
import children0 from '../assets/children0.jpeg'
import children1 from '../assets/children1.jpeg'
import children2 from '../assets/children2.jpeg'
import children6 from '../assets/children6.jpeg'
import children7 from '../assets/children7.jpeg'
import children8 from '../assets/children8.jpeg'
import children10 from '../assets/children10.jpeg'
import children11 from '../assets/children11.jpeg'
import children12 from '../assets/children12.jpeg'
import './Fiction.css'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navigation from '../components/Navigation'

function Fiction() {
  return (
    <div>
      <Navigation/>
      <div className='heeeee'>
      <div className='products-heading'><h2>Fiction Books</h2></div>
    <div className='bookproducts'>
      <div className='image-book-products-1'>
        <div><img src={chidren4} alt="" /></div>
        <div className='title-book-products-1'>
        <p><Link to="/BookDescription">Learn more...</Link></p> 
        </div>
      </div>
      <div className='image-book-products-2'>
      <div><img src={children0} alt="" /></div>
      <div className='title-book-products-2'>
    <p><Link to="/BookDescription">Learn more...</Link></p> 
        </div>
      </div>
      <div className='image-book-products-3'>
      <div><img src={children1} alt="" /></div>
      <div className='title-book-products-3'>
    <p><Link to="/BookDescription">Learn more...</Link></p> 
        </div>
      </div>
      <div>
      <div className='image-book-products-4'><img src={children2} alt="" /></div>
      <div className='title-book-products-4'>
    <p><Link to="/BookDescription">Learn more...</Link></p> 
        </div>
      </div>
      <div>
      <div className='image-book-products-4'><img src={children6} alt="" /></div>
      <div className='title-book-products-4'>
    <p><Link to="/BookDescription">Learn more...</Link></p> 
        </div>
      </div>
    </div>
    <div className='bookproducts'>
      <div className='image-book-products-1'>
        <div><img src={children7} alt="" /></div>
        <div className='title-book-products-1'>
        <p><Link to="/BookDescription">Learn more...</Link></p> 
        </div>
      </div>
      <div className='image-book-products-2'>
      <div><img src={children8} alt="" /></div>
      <div className='title-book-products-2'>
    <p><Link to="/BookDescription">Learn more...</Link></p> 
        </div>
      </div>
      <div className='image-book-products-3'>
      <div><img src={children10} alt="" /></div>
      <div className='title-book-products-3'>
    <p><Link to="/BookDescription">Learn more...</Link></p> 
        </div>
      </div>
      <div>
      <div className='image-book-products-4'><img src={children11} alt="" /></div>
      <div className='title-book-products-4'>
    <p><Link to="/BookDescription">Learn more...</Link></p> 
        </div>
      </div>
      <div>
      <div className='image-book-products-4'><img src={children12} alt="" /></div>
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

export default Fiction

