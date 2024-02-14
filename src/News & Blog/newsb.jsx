import React from 'react'
import newb from '../assets/images (1) 1.jpg'
import newb1 from '../assets/images (2) 1.jpg'
import newb2 from '../assets/images 1.jpg'
import './newsb.css'

function Newb() {
  return (
    <>
    <div className='newb-container' data-aos="fade-up" data-aos-duration={2000}>
    <div className='newb-heading'><h2>News & Blog</h2></div>
    <div className='booknewb'>
      <div className='image-book-newb-1'>
        <div><img src={newb} alt="" /></div>
        <div className='title-book-newb-1'>
          <h3>Watchout our blogs & news here</h3>
        </div>
      </div>
      <div className='image-book-newb-2'>
      <div><img src={newb2} alt="" /></div>
      <div className='title-book-newb-2'>
          <h3>Watchout our blogs & news here</h3>
        </div>
      </div>
      <div className='image-book-newb-2'>
      <div><img src={newb1} alt="" /></div>
      <div className='title-book-newb-2'>
          <h3>Watchout our blogs & news here</h3>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Newb
