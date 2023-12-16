import React from 'react'
import "./Person.css"

function Person(props) {
    const {firstName, lastName, email, img, id} = props
  return (
    <div className={`card ${id %2 === 0 ? "bg" : ""}`}>
        <img src={img} alt={firstName} />
        <h4>
            {firstName} {lastName}
        </h4>
        <h5>{email}</h5>
    </div>
  )
}

export default Person