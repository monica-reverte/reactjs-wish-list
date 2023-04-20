import axios from "axios";
import { useEffect, useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../components/Context/AuthContenxt';


  export const Profile = () => {
    const {authLogin, authUser} = useContext(AuthContext);
    const navigate = useNavigate();
  
    // const getUser = async () => {
    //   try {
    //     const res = await axios.get('http://localhost:4000/api/users/me');
    //     authLogin(res.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
  
    

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:4000/api/auth/logout');
      authLogin(null);
      toast.success('Logged out successfully');
      navigate('/auth');
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Profile</h1>
      <div className="mt-3">

        <h2 className="text-2xl">Name: {authUser.name}  </h2>
        <h2 className="text-2xl">Email: {authUser.email} </h2>
      </div>
      <div className="mt-3">
        <Link to="/edit-profile">
          <button className="bg-violet-700 text-white w-full my-2 py-2 rounded">Edit Profile</button>
        </Link>
      </div>
      <div>
      <button onClick={handleLogout} className="bg-violet-700 text-white w-full my-2 py-2 rounded">Logout</button>
      </div>
    </div>
  )
}
