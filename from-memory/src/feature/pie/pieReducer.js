import { BUY_PIE } from "./pieTypes";

const initialState = {
  numOfPie: 5,
  pieOutOfStock: false,
};

const pieReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PIE:
      return state.numOfPie < 1
        ? {
            ...state,
            numOfPie: 0,
            pieOutOfStock: true,
          }
        : {
            ...state,
            numOfPie: state.numOfPie - action.payload,
            pieOutOfStock: false,
          };
    default:
      return state;
  }
};

export default pieReducer;
