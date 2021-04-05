import { combineReducers } from "redux";
import { dogReducer } from "./dogs/dogReducer";

export const rootReducer = combineReducers({
  dogs: dogReducer,
});
