import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tasksListReducer } from "../redux/features/listSlice";

export const store = configureStore({
  reducer: {
    taskListMethods: tasksListReducer,
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
