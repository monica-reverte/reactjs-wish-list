import React from 'react';

export const FiltersContainer = ({ children }) => {
  return (
      <div className="flex items-center justify-between p-4 m-2 text-violet-700 font-bold ">
          {children}
      </div>
  )
};

export const ItemsLeft = ({ total }) => {
  return (
      <p className="text-violet-700 text-sm">
          {total} whishes left
      </p>
  )
};

export const FilterButtonContainer = ({
  children
}) => {
  return (
      <div className="flex items-center space-x-2">
          {children}
      </div>
  )
};

export const FilterButton = ({ active, filter }) => {
  return (
      <button className={` hover:text-white cursor-pointer transition-all duration-300 ease-in-out font-bold`
              + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-violet-700' : 'text-violet-500')}>{filter}</button>
  )
}


