import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import pieReducer from "./pie/pieReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  pie: pieReducer,
});
