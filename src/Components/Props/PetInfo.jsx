import React from 'react'

function PetInfo(props) {
  return (
    <div>
        My {props.animal} is {props.age} years old
    </div>
  )
}

export default PetInfo