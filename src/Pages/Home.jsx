import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { Title } from "../components/Title";
import { TodoList } from "../components/TodoList";
import { TodoInput } from "../components/Todoinput";
import { TodoContext } from '../components/Context/TodosContext';
// import { AuthContext } from '../components/Context/AuthContenxt';
// import { getLocalStorage } from "../components/Utils/utils";
// import axios from 'axios';





export function Home() {

    const {todos, setTodos} = useContext(TodoContext);

    // const todoList = [...todos]
    // todoList.push(newTodo);

    // setTodos(todoList);



const [activeFilter, setActiveFilter] = useState('all');
const [filteredTodos, setFilteredTodos] = useState(todos);









const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
};




const showAllTodos = () => {
    setActiveFilter('all')
}

const showActiveTodos = () => {
    setActiveFilter('active')
}

const showCompletedTodos = () => {
    setActiveFilter('completed')
}

useEffect(() => {
    if (activeFilter === 'all') {
    setFilteredTodos(todos);
    } else if (activeFilter === 'active') {
        const activeTodos = todos.filter(todo => todo.completed === false);
        setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
        const completedTodos = todos.filter(todo => todo.completed === true);
        setFilteredTodos(completedTodos);
    }

},[activeFilter, todos]);




    return (
    
    <div>
        <Title />
        <TodoInput />
        <TodoList
            activeFilter={activeFilter}
            todos={filteredTodos}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleClearComplete={handleClearComplete} />
    </div>
    
    )
}
