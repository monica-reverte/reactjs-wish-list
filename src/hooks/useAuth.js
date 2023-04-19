import axios from 'axios';
import { useEffect, useState } from 'react';

const useAuth = () => {

  const [auth, setAuth] = useState();

  const verifyAuth = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/auth/is_logged_in');
      return res.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    (
      async () => {
        const data = await verifyAuth();
        setAuth(data);
      }
    )();
  }, [auth]);
  

  };
  
  export default useAuth;


  // const [auth, setAuth] = useState();
  
  //   const verifyAuth = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:4000/api/auth/is_logged_in');
  //       return res.data;
  //     } catch (err) {
  //       console.log(err);
  //       return false;
  //     }
  //   };
  
  //   useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     if (token) {
  //       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //     }
  
  //     (async () => {
  //       const data = await verifyAuth();
  //       setAuth(data);
  //     })();
  //   }, []);
  
  //   return { auth };


