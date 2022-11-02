import useAPI from "./useAPI";
import { loadTaskActionCreator } from "../redux/features/listSlice";
import mockTasksList from "../mocks/mockTasksList";
import { useAppDispatch } from "../redux/hooks";

describe("Given a function useAPI", () => {
  const { loadTasks } = useAPI();
  const dispatch = useAppDispatch();
  describe("When loadTasks is called with new tasks", () => {
    test("Then it should introduce a list of 3 tasks", async () => {
      const expectedAction = dispatch(loadTaskActionCreator(mockTasksList));

      await loadTasks();
      debugger;
      expect(expectedAction).toHaveBeenCalled();
    });
  });
});
