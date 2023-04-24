import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContenxt';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { googleProvider } from '../../firebaseConfig';
import { AiFillGoogleCircle } from "react-icons/ai"


export const Login = () => {

  const auth = getAuth()

  const navigate = useNavigate();


  const {authLogin} = useContext(AuthContext);

  const loginWithPopup = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider)
      const res = await axios.post("http://localhost:4000/api/auth/firebase", response.user.auth.currentUser );      
      if(res.data.ok){
        authLogin(res.data.user);
        navigate('/');
      } 
    } catch (err) {
      console.log(err);
    }
  }

  

  const login = async (e) => {
    
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });
      if(res.data.ok){
        authLogin(res.data.user);
        navigate('/');
      }
      
      
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Login</h1>
      <form onSubmit={login}>
        <div className="mb-3">
            <label>Email</label>
            <input type="email" placeholder="Enter Email..." name="email" className="focus:outline-none border-none p-2 rounded w-full" required></input>
        </div>
        <div className="mb-3">
            <label>Password</label>
            <input type="password" placeholder="Enter Password..." name="password" className="focus:outline-none border-none p-2 rounded w-full" required></input>
        </div>
            <button type="submit" className="bg-violet-700 text-white w-full py-2 rounded" >Login</button>           
        </form>
        
        
        <button onClick={loginWithPopup }type="submit" className="flex flex-row bg-violet-700 text-white w-full py-2 rounded mt-3" >
          <AiFillGoogleCircle className="m-1 text-2xl"/>
          <span className="ml-1">Google Login</span>
          </button>
        
    </div>
  )
}

