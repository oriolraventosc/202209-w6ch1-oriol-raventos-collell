import ToDoList from "./ToDoList";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";

describe("Given a List component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of tasks", () => {
      render(
        <Provider store={store}>
          <ToDoList />
        </Provider>
      );

      const ulList = screen.queryByRole("list", {
        name: "task",
      });

      expect(ulList).toBeInTheDocument();
    });
  });
});
