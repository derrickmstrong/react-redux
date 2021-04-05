import { ADOPT_DOG } from "./dogTypes";

export const adoptDog = (number = 1) => {
  return {
    type: ADOPT_DOG,
    payload: number,
  };
};
