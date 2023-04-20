import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContenxt';

export const PrivateRoutes = () => {
  const {authUser} = useContext(AuthContext);
  

  return authUser ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoutes;