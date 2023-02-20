import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserToken {
  email: string;
  token: string;
}

interface UserState {
  currentUser: UserToken;
  isAuth: boolean;
  error: string | null;
}
export const initialState: UserState = {
  currentUser: {
    email: window.localStorage.getItem('user') || '',
    token: window.localStorage.getItem('token') || '',
  },
  isAuth: !!window.localStorage.getItem('token') || false,
  error: null,
};
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserToken>) => {
      state.currentUser = payload;
      state.isAuth = true;
    },
    deleteUser: (state) => {
      state.currentUser.email = '';
      state.currentUser.token = '';
      state.isAuth = false;
    },
    setError: (state, { payload }: PayloadAction<string | null>) => {
      state.error = payload;
    },
    deleteError: (state) => {
      state.error = '';
    },
  },
});

export const user = userSlice.reducer;
export const { setUser, deleteUser, setError, deleteError } = userSlice.actions;
