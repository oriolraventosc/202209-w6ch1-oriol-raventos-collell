import types from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TasksState {
  tasks: types[];
}

const taskInitialState: TasksState = {
  tasks: [],
};

const tasksListSlice = createSlice({
  name: "tasks",
  initialState: taskInitialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<types[]>): TasksState => ({
      ...state,
      tasks: [...action.payload],
    }),
    removeTask: (state, action: PayloadAction<number>): TasksState => ({
      ...state,
      tasks: [
        ...taskInitialState.tasks.filter((task) => task.id !== action.payload),
      ],
    }),
  },
});

export const tasksListReducer = tasksListSlice.reducer;

export const { addNewTask, removeTask } = tasksListSlice.actions;
