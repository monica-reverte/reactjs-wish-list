import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Active } from "./Pages/Active";
import { Completed } from "./Pages/Completed";

function App() {


  return (
    <div className='bg-violet-200 min-h-screen font-inter h-full text-violet-700 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/active' element={<Active />} />
          <Route path='/completed' element={<Completed />} />
      </Routes>
      
    </BrowserRouter>
      </div>
        
    </div>
  );
}

export default App;