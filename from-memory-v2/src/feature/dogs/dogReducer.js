import { ADOPT_DOG } from "./dogTypes";

const initialState = {
  numOfDogs: 2,
  adoptionClosed: false,
};

export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADOPT_DOG:
      return state.numOfDogs <= 1
        ? {
            ...state,
            numOfDogs: 0,
            adoptionClosed: true,
          }
        : {
            ...state,
            numOfDogs: state.numOfDogs - action.payload,
            adoptionClosed: false,
          };
    default:
      return state;
  }
};
