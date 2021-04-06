import { combineReducers } from "redux";
import { dogReducer } from "./dog/dogReducer";
import { userReducer } from './user/userReducer'

export const rootReducer = combineReducers({
  dog: dogReducer,
  user: userReducer,
});
