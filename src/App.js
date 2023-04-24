import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { NavBar } from './components/NavBar';
import { Profile } from './Pages/Profile';
import { PrivateRoutes } from './components/PrivateRoutes';
import { Auth } from './Pages/Auth';
import { AuthContextProvider } from './components/Context/AuthContenxt';
import { TodoContextProvider } from './components/Context/TodosContext';
import { Register } from './components/auth/Register';



function App() {

 


  return (
    <div className='bg-violet-200 min-h-screen font-inter h-full text-violet-700 flex items-center justify-center pb-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
      
      
            <AuthContextProvider>
              <TodoContextProvider>
              <NavBar />
              <Routes>
                <Route element ={<PrivateRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile/>} />
              </Route>
              
              <Route path="/auth" element={<Auth />} />
              <Route path="/auth/register" element={<Register/>} />
              </Routes>
              </TodoContextProvider>
    
            </AuthContextProvider>
            
            
      
      </div>
        
    </div>
  );
}

export default App;