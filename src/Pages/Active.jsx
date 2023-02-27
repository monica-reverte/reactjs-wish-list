import React from 'react'
import { useState, useEffect } from 'react';
import { Title } from "../components/Title";
import { TodoList } from "../components/TodoList";
import { TodoInput } from "../components/Todoinput";


const getLocalStorage = () => {
    let todos = localStorage.getItem("todos");
    if(todos) {
        return (todos = JSON.parse(localStorage.getItem("todos")));
    }else {
        return []
    }
};

export function Active() {

    const [todos, setTodos] = useState(getLocalStorage())

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title) => {

    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
    id: lastId + 1,
    title,
    completed: false
}

    const todoList = [...todos]
    todoList.push(newTodo);

    setTodos(todoList);
}


const [activeFilter, setActiveFilter] = useState('active');

const [filteredTodos, setFilteredTodos] = useState(todos);



const handleSetComplete = (id) => {

    const updatedList = todos.map(todo => {
    if (todo.id === id) {
        return { ...todo, completed: !todo.completed}
    }
    return todo;
    })

    setTodos(updatedList);
} 

const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
};

const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
}




useEffect(() => {
    const activeTodos = todos.filter(todo => todo.completed === false);
    setFilteredTodos(activeTodos);

},[activeFilter, todos]);




    return (
    
    <div>
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList
            activeFilter={activeFilter}
            todos={filteredTodos}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
            handleClearComplete={handleClearComplete} />
    </div>
    
    )
}
