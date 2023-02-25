import React from 'react'

export const TodoList = ({children}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lf overflow-hidden shadow-2xl">
        {children}
    </div>
  )
}
