import React from 'react';
import { useState } from "react";

export const TodoInput = ({ addTodo }) => {

    const [title, setTitle] = useState('');

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
                placeholder="Make a wish"
            />
            
        </div>
    )}