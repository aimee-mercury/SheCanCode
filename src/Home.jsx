import React from 'react'
import Footer from './Footer/Footer'
import Supportus from './SupportUs/Support'

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
    <Supportus/>
    <Footer/>
    </div>
    </>
  )
}

export default Home
