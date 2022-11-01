import types from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import task from "../../data/tasks";

interface TasksState {
  tasks: types[];
}

export const taskInitialState: TasksState = {
  tasks: task,
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
      tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
    }),
  },
});

export const tasksListReducer = tasksListSlice.reducer;

export const {
  addNewTask: loadTaskActionCreator,
  removeTask: removeTaskActionCreator,
} = tasksListSlice.actions;
