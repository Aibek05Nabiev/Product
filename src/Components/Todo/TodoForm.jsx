import React, {useState} from 'react'

function TodoForm({addTodo}) {
    const [text, setText] = useState('')

    const onSubmitHanler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText("")
    }
  return (
    <div className='form-container'>
        <form onSubmit={onSubmitHanler}>
            <input  
                placeholder='Enter new todo' 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                type='text'
                />

            <button type='submit'>Add todo</button>
        </form>
    </div>
  )
}

export default TodoForm