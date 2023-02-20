import axios from 'axios';
import { AppDispatch } from '../redux/store';
import { setError } from '../redux/slices/userSlice';

export const registration =
  (email: string, password: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response = await axios
        .post(`http://localhost:5000/auth/registration`, {
          email,
          password,
        })
        .catch((err) => dispatch(setError(err.response.data.message)));
      dispatch(setError(response.data.message));
    } catch (error) {
      console.log(error);
    }
  };
