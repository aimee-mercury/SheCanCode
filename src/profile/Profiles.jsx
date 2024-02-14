import React from 'react'

import "./style.css"
function Profiles({image, name, description}) {
  return (
    <>
   
    <div className="container-nonfiction">
        <div className="img">
          <img src={image} alt="non1" width={450} height={500} />
        </div>
        <div className='owner'>
          <h2>{name} </h2>
          <p>{description}</p>
        </div>
        </div>
        
    </>
 
  )
}

export default Profiles