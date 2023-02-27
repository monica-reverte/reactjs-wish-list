import React from 'react';
import { FilterButton, FilterButtonContainer, FiltersContainer, ItemsLeft } from "./TodoFiltersComponents";
import { Link } from 'react-router-dom';

export const TodoFilters = ({ total, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos, handleClearComplete }) => {
    return (
        <FiltersContainer>
            <ItemsLeft total={total} />
            <FilterButtonContainer>
                <Link to={'/'}>
                    <FilterButton action={() => showAllTodos()} active={activeFilter} filter='All' />
                </Link>
                <Link to={'/active'}>
                    <FilterButton action={() => showActiveTodos()} active={activeFilter} filter='Active' />
                </Link>
                <Link to={'/completed'}>
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter='Completed' />
                </Link>
            </FilterButtonContainer>

            <button onClick={() => handleClearComplete()} className="text-emerald-400 hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
                Clear Completed
            </button>
        </FiltersContainer>
    )
}

