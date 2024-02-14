import React from 'react'
import './book.css'
function Book( {image, name, description}) {
  return (
    <div className="container">
    <div>
        <div className="img">
          <img src={image} alt="children0" width={300} height={300}  />
        </div>
        <div className='chidrenbook'>
          <h2>{name} </h2>
          <p>{description}</p>
        </div>
        </div>
        
    </div>
  )
}

export default Book
