import React from 'react'
import { ToDoButton } from './Client'

export const ToDoItem = ({title , description,id,completed}) => {
  return (
    <div className='todo'>
       <div>
        <h4>{title}</h4>
        <p>{description}</p>
       </div>

       <div>
        <ToDoButton id ={id} completed={completed}/>
       </div>
    </div>
  )
}
