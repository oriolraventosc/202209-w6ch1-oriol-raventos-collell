import useAPI from "./useAPI";
import {
  loadTaskActionCreator,
  removeTaskActionCreator,
} from "../redux/features/ListSlice/listSlice";
import mockTasksList from "../mocks/mockTasksList";
import { useAppDispatch } from "../redux/hooks";

describe("Given a function useAPI", () => {
  const { loadTasks, removeTask } = useAPI();
  const dispatch = useAppDispatch();
  describe("When loadTasks is called with new tasks", () => {
    test("Then it should introduce a list of 3 tasks", async () => {
      const expectedAction = dispatch(loadTaskActionCreator(mockTasksList));

      await loadTasks();
      expect(expectedAction).toHaveBeenCalled();
    });
  });

  describe("When removeTask is called", () => {
    test("Then it should introduce an empty list", async () => {
      const expectedAction = dispatch(removeTaskActionCreator(1));

      await removeTask(1);
      expect(expectedAction).toHaveBeenCalled();
    });
  });
});
