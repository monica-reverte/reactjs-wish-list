import { Title } from "./components/Title/Title";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoInput } from "./components/Todoinput/Todoinput";
import { Todo } from "./components/ToDo/Todo";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput />
        <TodoList>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </TodoList> 
      </div>

    </div>

  );
}

export default App;
