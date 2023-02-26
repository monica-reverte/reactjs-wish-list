import React from 'react';
import { FilterButton, FilterButtonCointainer, FiltersContainer, ItemsLeft } from "./TodoFiltersComponents";

export const Todofilters = () => {
  return (
    <FiltersContainer>
        <ItemsLeft />
        <FilterButtonCointainer>
            <FilterButton action={()=> {}} active="All" filter="All"/>
            <FilterButton action={()=> {}} active="All" filter="Active"/>
            <FilterButton action={()=> {}} active="All" filter="Completed"/>
        </FilterButtonCointainer>

        <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
            Clear Completed
        </button>
    </FiltersContainer>
  )
}
