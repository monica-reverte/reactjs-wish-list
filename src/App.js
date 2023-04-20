import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Active } from "./Pages/Active";
import { Completed } from "./Pages/Completed";
import { NavBar } from './components/NavBar';
import { Profile } from './Pages/Profile';
import { PrivateRoutes } from './components/PrivateRoutes';
import { Auth } from './Pages/Auth';
import { EditProfile } from './Pages/EditProfile';
import { AuthContextProvider } from './components/Context/AuthContenxt';
import { TodoContextProvider } from './components/Context/TodosContext';



function App() {


  return (
    <div className='bg-violet-200 min-h-screen font-inter h-full text-violet-700 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
      
            <AuthContextProvider>
              <TodoContextProvider>
              <NavBar />
              <Routes>
                <Route element ={<PrivateRoutes />}>
                <Route path='/' element={<Home />} />
                <Route path='/active' element={<Active />} />
                <Route path='/completed' element={<Completed />} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/edit-profile' element={<EditProfile/>} />
              </Route>
              
              <Route path="/auth" element={<Auth />} />
                
              </Routes>
              </TodoContextProvider>
    
            </AuthContextProvider>
      
      </div>
        
    </div>
  );
}

export default App;