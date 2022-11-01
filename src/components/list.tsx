import { useAppDispatch, useAppSelector } from "../app/hooks";
import ListStyled from "./ListStyled";
import { removeTaskActionCreator } from "../redux/features/listSlice";

const List = (): JSX.Element => {
  const taskListMethods = useAppSelector(
    ({ taskListMethods }) => taskListMethods.tasks
  );

  const dispatch = useAppDispatch();
  return (
    <ListStyled>
      <ul aria-label="task" className="list__item">
        {taskListMethods.map((task, index) => (
          <div className="list-container" key={index}>
            <li key={index}>{task.name}</li>
            <button
              className="list__button"
              onClick={() => dispatch(removeTaskActionCreator(task.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </ListStyled>
  );
};

export default List;
