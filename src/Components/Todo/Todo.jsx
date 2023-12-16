import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Todo() {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("Hello")
  // let a = "g"

  // a= "s"

  console.log(value)
  // setValue("HI aibek")

  console.log(value)



  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: todos.length + 1,
    }
    setTodos([...todos, newTodo])
    setValue("HI aibek")
  }

  const delteeTodoHandler = (id) => {
    setTodos(todos.filter((x) => x.id !== id))
  }

  const toggleHandler = (id) => {
    setTodos(
      todos.map((x) => x.id === id 
      ? {...x, isCompleted: !x.isCompleted} 
      : {...x})
    )
  }

 const clearTodos = () => {
  setTodos([])
 }
 
  return (
    <div>
        <h1>Todo app</h1>
        <TodoForm addTodo={addTodoHandler} />
        <button onClick={clearTodos}>Clear</button>
        <button>check Delete</button>
        <TodoList 
          todos={todos} 
          deleteTodo={delteeTodoHandler} 
          toggleTodo={toggleHandler} 
         />
    </div>
  )
}

export default Todo