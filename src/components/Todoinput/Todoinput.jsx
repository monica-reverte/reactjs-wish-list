import React, { useContext } from 'react';
import { useState } from "react";
import { TodoContext } from '../Context/TodosContext';
import { AuthContext } from '../Context/AuthContenxt';
import axios from 'axios';

export const TodoInput = () => {
    const {todos, setTodos} = useContext(TodoContext);
    const {authUser} = useContext(AuthContext);


    const [title, setTitle] = useState('');

    
    // const [todos, setTodos] = useState(getLocalStorage());
    // useEffect(() => {
    // localStorage.setItem("todos", JSON.stringify(todos));
    // }, [todos]);

    const addTodo = async () => {

    const newTodo = {
    title,
    completed: false,
    user: authUser.id
}
    try {
        const res = await axios.post('http://localhost:4000/api/todos/add', newTodo);       
        if(res.data.ok){
        setTodos([...todos, res.data.todo])
    }
    } catch (err) {
    console.log(err);

}

};
const handleAddTodo = (e) => {
    if (e.key.toLowerCase() === 'enter') {
        addTodo(title);
        setTitle('');
    }  
}

    return (

        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/hearticon.svg" alt="heart"></img>
            </div>
            <input
                className="focus:shadow-lg font-Inter focus:shadow-gray-700 pl-12 w-full py-4 bg-violet-300 rounded-xl outline-none transition-all duration-300 ease-in-out"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => handleAddTodo(e)}
                placeholder="Write your wish"
            />
            
        </div>
    )}