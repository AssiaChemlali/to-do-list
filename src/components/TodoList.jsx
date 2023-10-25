import React, { useEffect, useState,useReducer } from 'react'
import Todo from './Todo'
import { nanoid } from 'nanoid'
import TodoForm from './TodoForm'
import EditForm from './EditForm'


export const ACTIONS={
  ADD_TODO:"add-todo",
  DELETE_TODO:"delete-todo",
  EDIT_TODOS:"edit-todo",
  UPADTE_TODO:"update-todo",
  COMPLETE_TODO:"complete-todo"
}
function reducer(state,{type,payload}){
    
  switch(type){
    case ACTIONS.ADD_TODO:
      //localStorage.setItem('todos',JSON.stringify(state))
      return[
        ...state,
        {
          id:nanoid(),
          task:payload.task,
          complete:false,
          isEditing:false
        }
      ]
      
  

      case ACTIONS.DELETE_TODO:
        return state.filter(todo=>todo.id!==payload.id)

      case ACTIONS.EDIT_TODOS:
         return state.map((todo)=>todo.id===payload.id ?{...todo,isEditing:true}:todo)

      case ACTIONS.UPADTE_TODO:
        return state.map((todo)=>{
          return todo.id===payload.id 
          ?{
            ...todo,
            task:payload.task,
            isEditing:false
          }
          :todo
        })

      case ACTIONS.COMPLETE_TODO:
        return state.map((todo)=>{
          return(todo.id===payload.id ?{...todo,complete:!todo.complete}:todo)
        })

      default:
      return state
  }

  

}

const TodoList = () => {
 
 //const todos=localStorage.getItem('todos') ? JSON.parse(localStorage.getItem("todos")):[]
// console.log(todos)
  const [state,dispatch]=useReducer(reducer,[])
  /*
  const [todos,setTodos]=useState([])
  function addTodo(todo){
     setTodos(oldTodos=>{return[ ...oldTodos,{id:nanoid(),task:todo,complete:false,isEditing:false}] })
    
  }

  function deleteTodo(index){
   setTodos(todos.filter(todo=>todo.id!==index))
  }
  const toggleComplete=(id)=>{
    setTodos(todos.map(item=> {
      return (item.id===id ? {...item,complete:!item.complete}:item)}))
  }
  const editTodo=(id)=>{
    setTodos(todos.map((item)=>item.id===id ?{...item,isEditing:true}:item))

  }

  function updateTodo(value,id){
    setTodos(todos.map((todo)=>{
      return todo.id===id ?
        {...todo,
          task:value,
          isEditing:false
        }
        :todo
      }
    )
    )

  }
*/

  return (
    <div className='todo-list'>
      <h1>get things done</h1>
      <TodoForm dispatch={dispatch} />
      
       
      <div className="list">
        {state.map((item,index)=>
            item.isEditing 
            ? <EditForm todo={item} key={index} dispatch={dispatch}/>
            : <Todo todo={item} key={index} dispatch={dispatch}/>
          )
        }
      </div>

    </div>
  )
}

export default TodoList