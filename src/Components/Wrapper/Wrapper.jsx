import React from 'react'

function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    width: props.width,
    padding: "20px",
    margin: '20px auto'
  }
  return (
    <div >
      {props.children}
    </div>
  )
}

export default Wrapper