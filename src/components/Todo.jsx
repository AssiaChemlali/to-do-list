import React from 'react'
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
import { ACTIONS } from './TodoList'
const Todo = ({todo,dispatch,editTodo,toggleComplete}) => {
 

  return (
   
    <div 
      className='todo '
      key={todo.id}
      >
      <p onClick={()=> dispatch({type:ACTIONS.COMPLETE_TODO,payload:{id:todo.id}}) } className={`${todo.complete===true ? "complete" : ""}`} >{todo.task} </p>
      <div className="btns">
          <button className='btn-icon' onClick={()=>dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})}><AiFillDelete/></button>
          <button className='btn-icon' onClick={()=>dispatch({type:ACTIONS.EDIT_TODOS,payload:{id:todo.id}})}><AiFillEdit/></button></div> 
      </div>
 
  )
}

export default Todo