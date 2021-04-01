import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import pieReducer from './pie/pieReducer'

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  pie: pieReducer,
});

export default rootReducer;
