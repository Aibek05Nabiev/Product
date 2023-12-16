import React from 'react'

function About(props) {
    const {name, age} = props
  return (
    <div>
        My {name} is {age} years old
    </div>
  )
}

export default About