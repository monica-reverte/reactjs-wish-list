import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { Title } from "../components/Title";
import { TodoList } from "../components/TodoList";
import { TodoInput } from "../components/Todoinput";
import { TodoContext } from '../components/Context/TodosContext';



export function Home() {

    const {todos} = useContext(TodoContext);

    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState(todos);


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
            showCompletedTodos={showCompletedTodos} />
    </div>
    
    )
}
