import { useState } from 'react';
import { registration } from '../../actions/registration';
import authorization from './authorization.module.css';
import { useTypedDispatch, useTypedSelector } from '../../hooks/reduxHooks';
import { deleteError } from '../../redux/slices/userSlice';

const Registration = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useTypedDispatch();
  const error = useTypedSelector((state) => state.user.error);

  return (
    <div className={authorization.containerAuth}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(registration(email, password));
          setPassword('');
          setEmail('');
        }}
      >
        <h1 className={authorization.textAuth}>Регистрация</h1>
        <div className={authorization.inputBlock}>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              dispatch(deleteError());
            }}
            value={email}
            type="email"
            placeholder="email"
            required
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
              dispatch(deleteError());
            }}
            value={password}
            type="password"
            placeholder="password"
            required
          />
          <button className={authorization.buttonSubmit} type="submit">
            Submit
          </button>
          <p>{error}</p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
