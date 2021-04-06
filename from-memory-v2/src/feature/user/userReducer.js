import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

const initialState = {
    isLoading: false,
    data: [],
    error: '',
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_USER_SUCCESS:
        return {
          isLoading: false,
          data: action.payload,
          error: "",
        };
      case FETCH_USER_FAILURE:
        return {
          isLoading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
}