import React from 'react'


export const Todo = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
        <div className="flex items-center">
            <span className=" border border-solid border-gray-500 rounded-full p-3 cursor-pointer"></span>
            <p className="pl-3"> To do Item</p>
        </div>
        <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="../../public/closeicon.svg" alt="Close Icon" />
    </div>
    
  )
}
