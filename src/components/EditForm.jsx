import React, { useState } from 'react'
import { ACTIONS } from './TodoList'
const EditForm = ({todo,dispatch}) => {
  const [task,setTask]=useState()

  function handleSubmit(e){
    e.preventDefault()
    dispatch({type:ACTIONS.UPADTE_TODO,payload:{id:todo.id,task:task}})
    setValue("")
  }
  return(
    <form  className='form'onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="text" 
        id="text" 
        placeholder={todo.task} 
        onChange={(e)=>setTask(e.target.value)}
        value={task}
      />
      <button className="btn-add" >update</button>
  </form>
  )
}

export default EditForm