import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../store";

function UserPost() {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    return () => {};
  }, [dispatch]);

  return posts.isLoading ? (
    <h2>Loading Posts...</h2>
  ) : posts.error ? (
    <h2>{posts.error}</h2>
  ) : (
    posts.data.map(({ id, title, body }) => {
      return (
        <div key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      );
    })
  );
}

export default UserPost;
