import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./postTypes";

import axios from "axios";

export const fetchPosts = () => {
  return (dispatch) => {
    // isLoading
    dispatch(fetchPostRequest());
    // data
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        const posts = res.data;
        dispatch(fetchPostSuccess(posts));
      })
      // error
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchPostFailure(errorMsg));
      });
  };
};

export const fetchPostRequest = () => {
  return { type: FETCH_POST_REQUEST };
};

export const fetchPostSuccess = (data) => {
  return { type: FETCH_POST_SUCCESS, payload: data };
};

export const fetchPostFailure = (error) => {
  return { type: FETCH_POST_FAILURE, payload: error };
};
