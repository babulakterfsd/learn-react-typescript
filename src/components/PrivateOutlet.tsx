import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateOutlet() {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return <div>Loading....</div>;
  }
  return user ? <Outlet /> : <Navigate to='/login' state={location.pathname} replace />;
}

export default PrivateOutlet;
