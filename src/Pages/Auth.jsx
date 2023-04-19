import{ useEffect }from 'react'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {

const  auth  = useAuth();
const navigate = useNavigate();

useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);
    return (
        <div>
            <Login />
            <Register />
        </div>
    )
}
