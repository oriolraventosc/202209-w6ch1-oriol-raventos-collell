import { useAppSelector } from "../redux/hooks";
import ListStyled from "./ListStyled";
import useAPI from "../hooks/useAPI";
import { useEffect } from "react";

const ToDoList = (): JSX.Element => {
  const taskListMethods = useAppSelector(
    ({ taskListMethods }) => taskListMethods.tasks
  );
  const { loadTasks, removeTask } = useAPI();
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <ListStyled>
      <ul aria-label="task" className="list">
        {taskListMethods.map((task, index) => (
          <ul className="list-container" key={index}>
            <li key={index}>{task.name}</li>
            <button
              className="list__button"
              onClick={() => removeTask(task.id)}
            >
              Delete
            </button>
          </ul>
        ))}
      </ul>
    </ListStyled>
  );
};

export default ToDoList;
