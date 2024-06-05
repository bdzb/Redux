import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from './todoSlice'
import './Todo.css'
const Todo = () => {
const todos=useSelector(state=>state.todos)
const dispatch=useDispatch()

 
  return (
    <>
    <div id='box'>
    <ul>
    {todos.map((todo)=>(
    <li key={todo.id}>
      {todo.text}
      <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
    </li>
    )
    )}
    </ul>
    </div>
    </>
  )

}

export default Todo