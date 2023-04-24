
import {  useContext } from "react";
import { AuthContext } from '../components/Context/AuthContenxt';



  export const Profile = () => {

    const {authLogout, authUser} = useContext(AuthContext);
    
  
    
    

    const handleLogout = async () => {
      try {
        authLogout(); 
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
      <h1 className="text-5xl font-anton font-bold tracking-widest text-center m-20">Profile</h1>
    <div className="flex items-center flex-col justify-between pt-20 pb-20 mb-1 mt-1 rounded-lg text-violet-100 bg-violet-400 border-solid border-violet-600">
      <div className="flex flex-col mb-20">

        <h2 className="text-2xl font-bold m-8">Name:<span className="font-normal m-3">{authUser.name}</span></h2>
        <h2 className="text-2xl font-bold">Email:<span className="font-normal m-3">{authUser.email}</span></h2>
      </div>
      <div>
      <button onClick={handleLogout} className="bg-violet-700 text-white text-lg w-full my-2 px-6 py-2 rounded">Logout</button>
      </div>
    </div>
    </div>
  )
}




// onClick={()=>logout({logoutParams:{returnTo: window.location.origin}})} 