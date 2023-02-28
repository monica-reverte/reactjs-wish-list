import React from 'react';
import { Todo } from "../Todo"
import { TodoFilters } from "../TodoFilters"

export const TodoList = ({
    todos,
    activeFilter,
    handleSetComplete,
    handleDelete,
    handleClearComplete,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos }) => {

            return (

                
                
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.length > 0 ? (
            todos.map(todo => (
                <Todo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete} />
            )
            )):(<div className="flex flex-col items-center mb-4"><p className="text-2xl">Your wish List is empty! Time to start wishing</p>
            <img className="h-40 w-40 m-5 " src="/wishicon.svg" alt="Wish Icon" /> </div>)}
            <TodoFilters
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete} />
        </div>)
}
