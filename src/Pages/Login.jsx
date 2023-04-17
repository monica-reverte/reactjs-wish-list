import {useContext, useState} from 'react'
import { UserContext } from "../Context/UserContext";
import { useNavigate } from 'react-router-dom';
import { login } from '../api/user';


export const Login = () => {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
  
    const data = { email, password };
    const response = await login(data);
  
    if (response && response.status === 200) {
      alert("User logged In");
      setUser(response.data.user);
      navigate("/");
    } else if (response && response.data && response.data.msg) {
      alert(response.data.msg);
    } else {
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Login</h1>
      <form onSubmit={handlerSubmit}>
        <div className="mb-3">
            <label>Email</label>
            <input type="email" placeholder="Enter Email..." className="focus:outline-none border-none p-2 rounded w-full" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="mb-3">
            <label>Password</label>
            <input type="password" placeholder="Enter Password..." className="focus:outline-none border-none p-2 rounded w-full" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>

            <button type="submit" className="bg-violet-700 text-white w-full py-2 rounded">Login</button>
        </form>
    </div>
  )
}
