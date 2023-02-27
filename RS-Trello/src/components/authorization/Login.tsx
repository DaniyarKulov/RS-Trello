import { useState } from 'react';
import { login } from '../../actions/login';
import { useTypedDispatch } from '../../hooks/reduxHooks';
import authorization from './authorization.module.css';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useTypedDispatch();

  return (
    <div className={authorization.containerAuth}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login(email, password));
        }}
      >
        <h1 className={authorization.textAuth}>Авторизация</h1>
        <div className={authorization.inputBlock}>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="email"
            required
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="password"
            required
          />
          <button className={authorization.buttonSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
