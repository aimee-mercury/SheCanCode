import React from 'react'
import no1 from '../../../src/assets/no1.jpg'
import no2 from '../../../src/assets/no2.jpg'
import no3 from '../../../src/assets/no3.jpg'
import no4 from '../../../src/assets/no4.jpg'
import no5 from '../../../src/assets/no5.jpg'
import no6 from '../../../src/assets/no6.jpg'
import no7 from '../../../src/assets/no7.jpg'
import no8 from '../../../src/assets/no9.jpg'
import no9 from '../../../src/assets/no9.jpg'
import no10 from '../../../src/assets/no10.jpg'
import './biogr.css'
import {Link} from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Navigation from '../../components/Navigation'


function Bibiliograph() {
  return (
    <div>
    <Navigation/>
    <div className='hee'>
    <div className='products-heading'><h2>Bibliograph</h2></div>
  <div className='bookproducts'>
     <div className='image-book-products-1'>
      <div><img src={no1} alt="" /></div>
      <div className='title-book-products-1'>
       <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div> 
    <div className='image-book-products-2'>
    <div><img src={no2} alt="" /></div>
    <div className='title-book-products-2'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div className='image-book-products-3'>
    <div><img src={no3} alt="" /></div>
    <div className='title-book-products-3'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={no4} alt="" /></div>
    <div className='title-book-products-4'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={no5} alt="" /></div>
    <div className='title-book-products-4'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
  </div>
  <div className='bookproducts'>
    <div className='image-book-products-1'>
      <div><img src={no6} alt="" /></div>
      <div className='title-book-products-1'>
       <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div className='image-book-products-2'>
    <div><img src={no7} alt="" /></div>
    <div className='title-book-products-2'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div className='image-book-products-3'>
    <div><img src={no8} alt="" /></div>
    <div className='title-book-products-3'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={no9} alt="" /></div>
    <div className='title-book-products-4'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={no10} alt="" /></div>
    <div className='title-book-products-4'>
   <p><Link to="/BookDescription">Learn more...</Link></p> 
      </div>
    </div>
  </div>
  <Footer/>
  {/* <Biography/> */}
  </div>
  </div>
  )
}

export default Bibiliograph

