import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./postTypes";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_POST_FAILURE:
      return {
        isLoading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
