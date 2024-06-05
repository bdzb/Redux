import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addtodo} from './todoSlice'

const AddTodo = () => {
const dispatch=useDispatch()
const [input,setinput]=useState('')
const handleadd=(e)=>{
  e.preventDefault();
  dispatch(addtodo(input))
  setinput('')
}
  return (
    <form action="" onSubmit={handleadd}>
      <input type="text" onChange={(e)=>setinput(e.target.value)} value={input}/>
      <button type="submit" onClick={handleadd}>Add todo</button>
    </form>
  )
}

export default AddTodo