import axios from 'axios';
// import { SET_USER } from '../redux/reducer/userReducer';
// import { AnyAction } from 'redux';
// import { ThunkAction } from 'redux-thunk';
import { AppDispatch } from '../redux/store';
import { setUser } from '../redux/slices/userSlice';
export const login = (email: string, password: string) => {
  return async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response = await axios.post(`http://localhost:5000/auth/login`, {
        email,
        password,
      });
      dispatch(setUser(response.data));
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.email);
    } catch (error) {
      console.log(error);
    }
  };
};
