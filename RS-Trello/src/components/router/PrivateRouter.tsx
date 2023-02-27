import { Outlet, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/reduxHooks';

export const PrivateRout = () => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};
