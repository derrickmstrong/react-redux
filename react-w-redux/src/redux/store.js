import { createStore } from "redux";
// import cakeReducer from "./cake/cakeReducer";
// import iceCreamReducer from './icecream/iceCreamReducer'
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
