import axios, { AxiosError, AxiosResponse } from 'axios';
import { AppDispatch } from '../redux/store';
import { setError } from '../redux/slices/userSlice';

interface Registr {
  message: string;
}
interface EmailPass {
  email: string;
  password: string;
}
export const registration =
  (email: string, password: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response = await axios.post<EmailPass, AxiosResponse<Registr>>(
        `https://server-trello-production.up.railway.app/auth/registration`,
        {
          email,
          password,
        }
      );
      dispatch(setError(response.data.message));
    } catch (error) {
      dispatch(setError((error as AxiosError<Registr>).response?.data.message || ''));
    }
  };
