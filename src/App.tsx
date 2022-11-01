import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import List from "./components/list";
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
      <List />
    </div>
  );
}

export default App;
