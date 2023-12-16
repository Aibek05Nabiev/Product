import React from 'react'
import "./Todo.css"


function TodoItem({item, deleteTodo, toggleTodo}) {
  return (
    <div className='todo-item'>
      <input type='checkbox' onChange={() => toggleTodo(item.id)} checked={item.isCompleted} />
      <p className={item.isCompleted ? 'text' :''}>{item.text}</p>
      <button className='btn' onClick={() => deleteTodo(item.id)}>Delete Todo</button>
    </div>
  )
}

export default TodoItem