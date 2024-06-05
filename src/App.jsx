import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './compo/Todo'
import AddTodo from './compo/AddTodo'
function App() {

  return (
    <>
    <div id="box">
      < AddTodo/>
     <Todo/>
     </div>
     
    </>
  )
}

export default App
