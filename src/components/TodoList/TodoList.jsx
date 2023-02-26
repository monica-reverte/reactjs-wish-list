import React from 'react'
import { Todofilters } from "../TodoFilters";
import { Todo } from '../ToDo/Todo'


export const TodoList = ({ todos, handleSetComplete, handleDelete }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lf overflow-hidden shadow-2xl">
        { todos.map(todo=> {
          return (
            <Todo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete}/>
          )
        })}
        <Todofilters />
    </div>
  )
}
