import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

;

export const Auth = () =>{
  
  return (
    
      <div>
        <Login />
        <Register />
      </div>
    
  );
}
