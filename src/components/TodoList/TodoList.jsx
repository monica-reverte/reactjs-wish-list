import React, { useContext, useEffect } from 'react';
import { Todo } from "../Todo"
import { TodoFilters } from "../TodoFilters"
import { AuthContext } from '../Context/AuthContenxt';
import axios from 'axios';
import { TodoContext } from '../Context/TodosContext';

export const TodoList = ({
    todos,
    activeFilter,
    handleSetComplete,
    handleDelete,
    handleClearComplete,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos }) => {

    

        const {authUser} = useContext(AuthContext);
        const {setTodos} = useContext(TodoContext);

        const getTodos = async() =>{
            const response = await axios.get(`http://localhost:4000/api/todos/all/${authUser.id}`)
            setTodos(response.data);
            
        }

        useEffect(() => {
            getTodos();
            
    
        
        }, [])
        

            return (

                
                
        <div >
            <div>
            <TodoFilters
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete} />
            </div>
            <div className="flex flex-col mt-2 rounded-lg overflow-hidden">
            {todos.length > 0 ? (
            todos.map(todo => (
                <Todo key={todo._id} todo={todo} handleSetComplete={handleSetComplete} handleDelete={handleDelete} />
            )
            )):(<div className="flex flex-col items-center mb-4"><p className="text-2xl">Your wish List is empty! Time to start wishing</p>
            <img className="h-40 w-40 m-5 " src="/wishicon.svg" alt="Wish Icon" /> </div>)}
            </div>
            
        </div>)
}
