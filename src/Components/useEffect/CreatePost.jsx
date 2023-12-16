import React, {useState} from 'react'
import "./Main.css"
import axios from "axios"

const URL = "https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/country";

function CreatePost() {
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")

  const handleCreate = async () =>{
    const payload = {
      name: name,
      avatar: url,
    }
      try{
        const response = await axios.post(URL , payload)

        if (response.status === 201){
          alert("Succes created post")
          setName("")
          setUrl("")
        }

        console.log(response)
      }catch(error){
        console.log(error)
      }
  }
  return (
    <div className='post-item'>
      <h2>Create Country</h2>
      <label for="name">Country name</label>
      <input type='text' id='name' placeholder='Name' onChange={(e) => setName(e.target.value)}/>
      <label for='url' >Image</label>     
      <input type='url' id='url' placeholder='image url' onChange={(e) => setUrl(e.target.value)}/>
      <button onClick={handleCreate} className='btn'>Create</button>
    </div>
  )
}

export default CreatePost