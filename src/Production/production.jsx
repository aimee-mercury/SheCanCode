import React, {useEffect} from 'react'
import stop from '../assets/book and tittle2 1.jpg'
import kid from '../assets/book and tittle3 1.jpg'
import tongue from '../assets/book and tittle5 1.jpg'
import pic2 from '../assets/book and tittle 7.jpg'
import bibliograph from '../assets/book and tittle4 1.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import './production.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Production() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);
  return (
    <div className='products-container' data-aos="fade-up" data-aos-duration={2000}>
      <div className='products-heading'><h2>Products</h2></div>
    <div className='bookproducts'>
      <div className='image-book-products-1'>
        <div><img src={stop} alt="" /></div>
        <div className='title-book-product-1'>
          <p>We have this book in the store, You can rent it or buy it any time. <br /><br /> <a href="">Learn  more ...</a></p>
        </div>
      </div>
      <div className='image-book-products-2'>
      <div><img src={kid} alt="" /></div>
      <div className='title-book-product-2'>
      <p>We have this book in the store, You can rent it or buy it any time. <br /><br /> <a href="">Learn  more ...</a></p>
        </div>
      </div>
      <div className='image-book-products-3'>
      <div><img src={bibliograph} alt="" /></div>
      <div className='title-book-product-3'>
      <p>We have this book in the store, You can rent it or buy it any time. <br /><br /> <a href="">Learn  more ...</a></p>
        </div>
      </div>
      <div>
      <div className='image-book-products-4'><img src={pic2} alt="" /></div>
      <div className='title-book-product-4'>
      <p>We have this book in the store, You can rent it or buy it  any time. <br /><br /> <a href="">Learn  more ...</a></p>
        </div>
      </div>
      <div>
      <div className='image-book-products-4'><img src={tongue} alt="" /></div>
      <div className='title-book-product-4'>
      <p>We have this book in the store, You can rent it or buy it any time. <br /><br /> <a href="">Learn  more ...</a></p>
        </div>
      </div>
    </div>
    <div className='products-button'>
        <button>More products <FaArrowRightLong className='arrow-icon'/></button>
      </div>
    </div>
  )
}

export default Production

