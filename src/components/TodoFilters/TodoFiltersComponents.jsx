import React from 'react';

export const FiltersContainer = ({ children }) => {
  return (
      <div className="flex items-center justify-between p-4 mt-1 mb-1 bg-emerald-700 border-b border-solid rounded-lg border-emerald-600">
          {children}
      </div>
  )
};

export const ItemsLeft = ({ total }) => {
  return (
      <p className="text-emerald-400 text-sm">
          {total} items left
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

export const FilterButton = ({ action, active, filter }) => {
  return (
      <button onClick={action}
          className={` hover:text-white cursor-pointer transition-all duration-300 ease-in-out `
              + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-yellow-400' : 'text-emerald-400')}>{filter}</button>
  )
}


