import React from 'react'
import "./Main.css"

function Post({data, update, deletePost}) {
    console.log(data)
  return (
    <div className='item-post'>
        <img src={data.avatar} alt={data.name} />
        <p>{data.name}</p>
        <div className='btns'>
            <button onClick={() => update(data.id)}>Update</button>
            <button onClick={() => deletePost(data.id)}>Delete</button>
        </div>
    </div>
  )
}

export default Post