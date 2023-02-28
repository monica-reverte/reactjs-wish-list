import React from 'react';

export const FiltersContainer = ({ children }) => {
  return (
      <div className="flex items-center justify-between p-4 mt-1 mb-1 text-violet-100 bg-violet-700 border-b border-solid rounded-lg border-violet-600">
          {children}
      </div>
  )
};

export const ItemsLeft = ({ total }) => {
  return (
      <p className="text-violet-100 text-sm">
          {total} whish left
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
      <button className={` hover:text-white cursor-pointer transition-all duration-300 ease-in-out `
              + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-violet-100' : 'text-violet-400')}>{filter}</button>
  )
}


