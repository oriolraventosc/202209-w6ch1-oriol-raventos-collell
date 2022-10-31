import { useAppSelector } from "../app/hooks";

const List = (): JSX.Element => {
  const taskListMethods = useAppSelector(
    ({ taskListMethods }) => taskListMethods.tasks
  );
  return (
    <ul>
      {taskListMethods.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
  );
};

export default List;
