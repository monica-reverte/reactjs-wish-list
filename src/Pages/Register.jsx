import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { register } from "../api/user"

export const Register = () => {
  const { setUser } = useContext(UserContext);
  const [user, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    const data = {
      name,
      email,
      password,
    };

    try {
      const response = await register(data);
      if (response.status === 201) {
        alert("User registered successfully");
        setUser(response.data.user);
        navigate("/");
      } else if (response.response && response.response.data && response.response.data.msg) {
        alert(response.response.data.msg);
      } else {
        alert(response.data.msg);
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while registering the user.");
    }
  };


  return (

    <div className="w-1/4 m-auto text-center">
      <h1 className="text-3xl my-3 font-bold">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              className="focus:outline-none border-none p-2 rounded w-full"
              type="text"
              name="name"
              placeholder="Enter Name..." 
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Email..." 
              className="focus:outline-none border-none p-2 rounded w-full"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter Password..." 
              className="focus:outline-none border-none p-2 rounded w-full"
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword">Password</label>
            <input
              placeholder="Confirm Password..." 
              className="focus:outline-none border-none p-2 rounded w-full"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
          </div>
      <button type="submit" className="bg-violet-700 text-white w-full py-2 rounded">Register</button>
    </form>
    </div>
  );
};


