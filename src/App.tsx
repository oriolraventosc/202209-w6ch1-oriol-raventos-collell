import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./redux/hooks";
import ToDoList from "./components/ToDoList";
import task from "./data/tasks";
import { loadTaskActionCreator } from "./redux/features/listSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadTaskActionCreator(task));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>To do App</h1>
      <ToDoList />
    </div>
  );
}

export default App;
