import axios from "axios";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";




export const Profile = () => {
  
  const [user, setUser] = useState(null);

  const getUser = async()=>{
    try{
      const {data} = await axios.get("/api/users/me");
      setUser(data)
    }catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    getUser();
  }, []);



  if(!user) return null;

  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Profile</h1>
      <div className="mt-3">
        <h2 className="text-2xl">Name:  </h2>
        <h2 className="text-2xl">Email:  </h2>
      </div>
      <div className="mt-3">
        <Link to="/edit-profile">
          <button className="bg-violet-700 text-white w-full my-2 py-2 rounded">Edit Profile</button>
        </Link>
      </div>
      <div>
      <button className="bg-violet-700 text-white w-full my-2 py-2 rounded">Logout</button>
      </div>
    </div>
  )
}
