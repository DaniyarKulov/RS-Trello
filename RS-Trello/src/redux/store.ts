import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/reducer';

// import { userReducer } from './userReducer';
// import fileReducer from './fileReducer';
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true, immutableCheck: false, serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
