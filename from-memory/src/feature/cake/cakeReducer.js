import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCake: 10,
  cakeOutOfStock: false,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return state.numOfCake === 1
        ? {
            ...state,
            numOfCake: 0,
            cakeOutOfStock: true,
          }
        : {
            ...state,
            numOfCake: state.numOfCake - 1,
            cakeOutOfStock: false,
          };
    default:
      return state;
  }
};

export default cakeReducer;
