import React from 'react'

function User({data, getUser}) {
  return (
    <div onClick={() => getUser(data.id)}>
        <img src={data.avatar}  alt={data.first_name}/>
        <h3>{data.first_name}</h3>
    </div>
  )
}

export default User