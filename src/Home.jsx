import React from 'react'
import Footer from './Footer/Footer'
import Supportus from './Support Us/supportus'
import Newb from './News & Blog/newsb'
import Production from './Production/production'
import Category from './Categories/Categories'
import About from './components/About'
import Hom from './components/Hom'
import './HOME.css'

function Home() {
  return (
    <>
    <div className='home'>
    <Hom/>
    <About/>
    <Category/>
    <Production/>
    <Newb/>
    <Supportus/>
    <Footer/>
    </div>
    </>
  )
}

export default Home
