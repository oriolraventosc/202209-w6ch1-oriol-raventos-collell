import {
  tasksListReducer,
  loadTaskActionCreator,
  taskInitialState,
  removeTaskActionCreator,
  TasksState,
} from "./listSlice";
import mockTasksList from "../../mocks/mockTasksList";

describe("Given a tasksListReducer", () => {
  const currentState: TasksState = {
    tasks: [
      {
        id: 0,
        name: "Sleep 1h per day",
        done: false,
      },
      {
        id: 1,
        name: "Review header pull request",
        done: false,
      },
      {
        id: 2,
        name: "Start learning bootstrap",
        done: false,
      },
    ],
  };
  describe("When it is invoked with a loadAction with 3 tasks", () => {
    test("Then it should print a list with 3 tasks", () => {
      const loadTasks = loadTaskActionCreator(mockTasksList);
      const initialState = taskInitialState;
      const expectState: TasksState = {
        tasks: [
          {
            id: 0,
            name: "Sleep 1h per day",
            done: false,
          },
          {
            id: 1,
            name: "Review header pull request",
            done: false,
          },
          {
            id: 2,
            name: "Start learning bootstrap",
            done: false,
          },
        ],
      };
      const newState = tasksListReducer(initialState, loadTasks);
      expect(newState).toStrictEqual(expectState);
    });
  });

  describe("When it is invoked with a removeAction", () => {
    test("Then it should show a list with the elementis with id 0 and 2", () => {
      const removetasks = removeTaskActionCreator(1);
      const expectState: TasksState = {
        tasks: [
          {
            id: 0,
            name: "Sleep 1h per day",
            done: false,
          },
          {
            id: 2,
            name: "Start learning bootstrap",
            done: false,
          },
        ],
      };
      const newState = tasksListReducer(currentState, removetasks);
      expect(newState).toStrictEqual(expectState);
    });
  });

  describe("When it is invoked with an unknown action", () => {
    test("Then it should show an empty array", () => {
      let unknownAction = { type: "unknown" };
      const initialState = taskInitialState;

      const expectState = {
        tasks: [],
      };

      const newState = tasksListReducer(initialState, unknownAction);

      expect(newState).toStrictEqual(expectState);
    });
  });
});
