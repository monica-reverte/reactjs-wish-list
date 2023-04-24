import React, { useContext } from "react";
import axios from "axios";

import { AuthContext } from "../Context/AuthContenxt";
import { useNavigate } from "react-router-dom";


export const Register = () => {

  const navigate = useNavigate();

  const {authRegister} = useContext(AuthContext);

    const register = async (e) => {
      e.preventDefault();
      const user = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };
      try {
        const res = await axios.post("http://localhost:4000/api/auth/register", user); 
        console.log(res)      
        if(res.data.ok){
          authRegister(res.data.user)
          navigate('/');
        }
      } catch (err) {
        console.log(err);
      }
    };
  

  return (

    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Register</h1>
        <form onSubmit={register}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              className="focus:outline-none border-none p-2 rounded w-full"
              type="text"
              name="name"
              placeholder="Enter Name..." 
              required
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Email..." 
              className="focus:outline-none border-none p-2 rounded w-full"
              type="email"
              name="email"
              required
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter Password..." 
              className="focus:outline-none border-none p-2 rounded w-full"
              type="password"
              name="password"
              required
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="confirmPassword">Password</label>
            <input
              placeholder="Confirm Password..." 
              className="focus:outline-none border-none p-2 rounded w-full"
              type="password"
              name="confirmPassword"
              required
            />
          </div> */}
      <button type="submit" className="bg-violet-700 text-white w-full py-2 rounded">Register</button>
    </form>
    </div>
  );
};


