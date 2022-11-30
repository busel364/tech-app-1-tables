import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import LoginReducer from '../reducers/LoginReducer';
import StatsChangerReducer from '../reducers/StatsChangerReducer';
import TablesArrayReducer from '../reducers/TablesArrayReducer';
import UsersReducer from '../reducers/UsersSlice';

export const store = configureStore({
  reducer: {
    user: UsersReducer,
    statsBar: StatsChangerReducer,
    tables: TablesArrayReducer,
    login: LoginReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
