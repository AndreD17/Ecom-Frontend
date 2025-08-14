import React from 'react'
import './Breadcrum.css'
import arrown_icon from '../Assets/Frontend_Assets/breadcrum_arrow.png';


const Breadcrum = (props) =>{
  const {product} = props
  return (
    <div className="breadcrum">
       HOME <img src={arrown_icon} alt="" /> SHOP <img src={arrown_icon} alt="" />
       {product.category} <img src={arrown_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum;