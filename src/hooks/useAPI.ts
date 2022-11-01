import { useAppDispatch } from "../redux/hooks";
import types from "../types";
import { loadTaskActionCreator } from "../redux/features/listSlice";
import { useCallback } from "react";

const useAPI = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const loadTasks = useCallback(async () => {
    let newUrl = `${urlAPI}`;
    const response = await fetch(newUrl);
    const apiResponse: types[] = await response.json();
    dispatch(loadTaskActionCreator(apiResponse));
  }, [dispatch, urlAPI]);
  return { loadTasks };
};

export default useAPI;
