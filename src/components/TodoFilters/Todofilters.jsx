import React, { useContext } from 'react';
import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./TodoFiltersComponents";

import axios from 'axios';
import { AuthContext } from '../Context/AuthContenxt';
import { TodoContext } from '../Context/TodosContext';

export const TodoFilters = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos }) => {



    

    const {todos, setTodos} = useContext(TodoContext);
    const {authUser} = useContext(AuthContext);


    const handleClearComplete = async() => {
        const response = await axios.delete(`http://localhost:4000/api/todos/${authUser.id}?completed=true`);
        if(response.data.ok){
          const updatedList = todos.filter(todo => !todo.completed);
          setTodos(updatedList);
        }
      };

    return (
        <FiltersContainer>
            <ItemsLeft total={total} />
            <FilterButtonContainer>
                
                    <FilterButton  action={() => showAllTodos()} active={activeFilter} filter='All' />
                
                
                    <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Active' />
                
                
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completed' />
                
            </FilterButtonContainer>

            <button onClick={() => handleClearComplete()} className="text-violet-400 font-bold hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                Clear Completed
            </button>
        </FiltersContainer>
    )
}

