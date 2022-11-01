import {
  tasksListReducer,
  loadTaskActionCreator,
  taskInitialState,
} from "./listSlice";
import task from "../../data/tasks";

describe("Given a tasksListReducer", () => {
  describe("When it is invoked with 3 tasks in the payload", () => {
    test("Then it should print a list with 3 tasks", () => {
      const loadTasks = loadTaskActionCreator(task);
      const initialState = taskInitialState;
      const expectState = {
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
});
