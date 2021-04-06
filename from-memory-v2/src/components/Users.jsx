import React, { useEffect } from "react";
import { fetchUsers } from "../feature";
import { useSelector, useDispatch } from "react-redux";

function Users() {
  const isLoading = useSelector((state) => state.user.isLoading);
  const user = useSelector((state) => state.user.data);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    return () => {};
  }, [dispatch]);

  return isLoading ? (
    <h2>Loading Users...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {user && user.map(({ name, email }, id) => (
          <p key={id}>
            {name} - {email}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Users;
