import React from 'react';

export const Todo = ({ todo, handleSetComplete, handleDelete }) => {

    const { id, title, completed } = todo;

    return (

        
        <div
            className="flex items-center justify-between p-4 mb-1 mt-1 rounded-lg text-violet-100 bg-violet-700 border-b border-solid border-violet-600 ">
            <div className="flex items-center">
            {
                completed ? (
                    <div onClick={() => handleSetComplete(id)} className="bg-violet-300 p-1 rounded-full cursor-pointer">
                        <img className="h-4 w-4 " src="/checkicon.svg" alt="Check Icon" />
                    </div>
                    )
                        : (
                            <img onClick={() => handleSetComplete(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/hearticon.svg" alt="heart">
                            </img>
                        )
                }

                <p className={"pl-3 " + (completed && "line-through")}>{title}</p>
            </div>
            
            <div className="justify-items-end">
            <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in" src="/editicon.svg" alt="edit icon"/>
            <img onClick={() => handleDelete(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"src="/closeicon.svg" alt="close icon"/>
            </div>
        </div>
    );
}
