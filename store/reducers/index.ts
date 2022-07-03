import { combineReducers } from "redux";
import { CounterState } from "../types/state";
import main from "./data";

const data = combineReducers({
  main,
});

export default data;

export type RootState = ReturnType<typeof data>;
