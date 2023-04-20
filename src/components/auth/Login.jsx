import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContenxt';

export const Login = () => {
  const {authLogin} = useContext(AuthContext);

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', {
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
            <button type="submit" className="bg-violet-700 text-white w-full py-2 rounded">Login</button>
        </form>
    </div>
  )
}


// export const Login = () => {
//   const navigate = useNavigate();

//   const login = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     try {
//       const res = await axios.post('http://localhost:4000/api/auth/login', {
//         email,
//         password,
//       });
//       console.log(res)
//       localStorage.setItem('token', res.data.access_token);

//       navigate('/');
//     } catch (err) {
//       console.log(err);
//     }