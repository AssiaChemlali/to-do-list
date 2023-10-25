import React, { useState } from 'react'
import { ACTIONS } from './TodoList'

const TodoForm = ({dispatch}) => {
  const [value,setValue]=useState()
  function handleSubmit(e){
    e.preventDefault()
    dispatch({type:ACTIONS.ADD_TODO,payload:{task:value}})
    setValue("")
  }
  return(
    <form  className='form'onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="text" 
        id="text" 
        placeholder='write todo' 
        onChange={(e)=>setValue(e.target.value)}
        value={value}
      />
      <button className="btn-add" >Add Todo</button>
  </form>
  )
}

export default TodoForm