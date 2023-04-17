import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Active } from "./Pages/Active";
import { Completed } from "./Pages/Completed";
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { NavBar } from './components/NavBar';
import { Profile } from './Pages/Profile';
import { UserContextProvider } from './Context/UserContext';

function App() {


  return (
    <div className='bg-violet-200 min-h-screen font-inter h-full text-violet-700 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
      
        <BrowserRouter>
          <UserContextProvider>
            <NavBar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/active' element={<Active />} />
                <Route path='/completed' element={<Completed />} />
                <Route path='/user/login' element={<Login />} />
                <Route path='/user/register' element={<Register/>} />
                <Route path='/user/profile' element={<Profile/>} />
              </Routes>   
          </UserContextProvider>   
        </BrowserRouter>
      
      </div>
        
    </div>
  );
}

export default App;