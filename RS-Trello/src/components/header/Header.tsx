import { useDispatch } from 'react-redux';
import header from './Header.module.css';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../redux/slices/userSlice';
import { useTypedSelector } from '../../hooks/reduxHooks';
import { useEffect, useState } from 'react';

const Header = () => {
  const isAuth = useTypedSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const [mail, setMail] = useState<string | null>(null);
  useEffect(() => {
    setMail(localStorage.getItem('user'));
  }, [isAuth]);
  return (
    <header className={header.header}>
      <div className={header.container}>
        <h1 className={header.headerText}>Trello:</h1>
        <div className={header.auth}>
          {!isAuth && (
            <Link className={header.auth} to="/login">
              Login
            </Link>
          )}
          {!isAuth && (
            <Link className={header.auth} to="/registration">
              Registration
            </Link>
          )}
          <p>{mail}</p>
          {isAuth && (
            <Link
              className={header.auth}
              onClick={() => {
                dispatch(deleteUser());
                localStorage.removeItem('token');
                localStorage.removeItem('user');
              }}
              to="/login"
            >
              logout
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
