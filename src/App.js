import { useState } from 'react';
import { Title } from "./components/Title/Title";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoInput } from "./components/Todoinput/Todoinput";



function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Watch the next Marvel Movie',
      completed: false,
    },
    {
      id: 2,
      title: 'Record the next Video',
      completed: false,
    },
    {
      id: 3,
      title: 'Wash the dishes',
      completed: false,
    },
    {
      id: 4,
      title: 'Study 2 hours',
      completed: false,
    }
    
  ])


  const addTodo = (title) =>{
    const lastId = todos.lenght > 0 ? todos[todos.lenght -1].id :1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed:false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetComplete = (id) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed}
      }
      return todo
    })

    setTodos(updatedList);
  }

  const handleDelete = (id) =>{
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList)
  }

  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos}
        handleSetComplete={handleSetComplete}
        handleDelete={handleDelete} />
      </div>

    </div>

  );
}

export default App;
