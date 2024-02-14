import React from 'react'
import Category from '../Categories/Categories'
import Production from '../Production/production'
import Newb from '../News & Blog/newsb'
import Footer from '../Footer/Footer'
import Navigation from '../components/Navigation'
import './Collection.css'

function Collection() {
  return (
    <div id='collecion'>
      <Navigation/>
      <Category/>
      <Production/>
      <Newb/>
      <Footer/>
    </div>
  )
}

export default Collection
