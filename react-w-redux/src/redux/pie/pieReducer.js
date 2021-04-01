import { BUY_PIE } from "./pieTypes";

const initialState = {
  numOfPie: 7,
};

const pieReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PIE:
      return {
        ...state,
        numOfPie: state.numOfPie - 1,
      };
    default:
      return state;
  }
};

export default pieReducer;
