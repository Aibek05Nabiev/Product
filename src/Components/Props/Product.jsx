import React from 'react'
import "./Product.css"

function Product(props) {
  const {title, image, price, years, brand} = props
  return (
    <div className='product'>
      <img src={image} alt={title}/>
      <div className='product-detail'>
        <h3>{title}</h3>
        <p>{brand}</p>
        <div className='item'>
          <span>{price}</span>
          <p>{years}</p>
        </div>
      </div>
    
    </div>
  )
}

export default Product