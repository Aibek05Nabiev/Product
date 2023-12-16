import React from 'react'
import "./Product.css"

function Service({item}) {
  return (
    <div className={`item-service ${item.student ? 'bg1': 'bg'}`}>
        <h2>{item.name}</h2>
        <img src={item.image} alt={item.name} />
        <div> {item.age}</div>
        <div>{item.lastname}</div>
        <div>{item.city}</div>
    </div>
  )
}

export default Service