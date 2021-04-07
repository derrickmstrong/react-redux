import { combineReducers } from "redux";
import { postReducer } from "./post/postReducer";

export const rootReducer = combineReducers({
  post: postReducer,
});
