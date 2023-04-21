import React, { useContext, useState } from 'react';
import { TodoContext } from '../Context/TodosContext';
import axios from 'axios';

export const Todo = ({todo}) => {

    const [currentTodo, setCurrentTodo] = useState(todo);
    const [isEditing, setIsEditing] = useState(false);

    const {todos, setTodos} = useContext(TodoContext);
    const { _id, title, completed } = todo;

    const handleDelete = async(id) => {
            const response = await axios.delete(`http://localhost:4000/api/todos/${id}`)
            if(response.data.ok){
                const updatedList = todos.filter(todo => todo._id !== _id);
                setTodos(updatedList);
            }
            
        }

    const handleEdit = (e) => {
        setCurrentTodo({ ...currentTodo, title: e.target.value });

    }

    const saveChanges = async(e) => {
        if (e.key === 'Enter'){
            const response = await axios.put("http://localhost:4000/api/todos/edit", currentTodo)
            const newArray = todos.map(todo => todo._id === response.data._id ? response.data : todo)
            setTodos(newArray);
            setIsEditing(false)
            
        }
    }

    const handleSetComplete = async (_id) => {
        setCurrentTodo({...currentTodo, completed: !currentTodo.completed});
        const response = await axios.put("http://localhost:4000/api/todos/edit", currentTodo)
            const newArray = todos.map(todo => todo._id === response.data._id ? response.data : todo)
            setTodos(newArray)
    
    } 

    return (
        <div className="flex items-center justify-between p-4 mb-1 mt-1 rounded-lg text-violet-100 bg-violet-700 border-solid border-violet-600">
            <div className="flex items-center">
                {completed ? (
                <div onClick={() => handleSetComplete(_id)} className="bg-violet-300 p-1 rounded-full cursor-pointer">
                    <img className="h-4 w-4 " src="/checkicon.svg" alt="Check Icon" />
                </div>
            ) : (
                <img onClick={() => handleSetComplete(_id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/hearticon.svg" alt="heart" />
            )}
                {isEditing ? (
                <input className="bg-violet-300 text-black" onChange={handleEdit} onKeyDown={saveChanges} type="text" value={currentTodo.title} />
            ) : (
                <p className={"pl-3 " + (completed && "line-through")}>{title}</p>
            )}
            </div>
            <div className="justify-items-end">
                <img onClick={() => handleDelete(_id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/closeicon.svg" alt="close icon" />
                <img onClick={() => setIsEditing(true)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/editicon.svg" alt="edit icon" />
            </div>
        </div>
    );
}      