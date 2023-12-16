import React, {useState} from 'react'

function About() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [message, setMessage] = useState("")

    const increment = () => {
        setCount(count + 1)
    }

    const send = () => {
        setMessage(text)
        setText("")
    }


  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>+</button>
        <button>decrement</button><br/> 
        <h3>{text}</h3>
        <input type='text' onChange={(e) => setText(e.target.value)} value={text} />  
        <button onClick={send}>Send</button>
        <h2>Message: {message}</h2>
    </div>
  )
}

export default About