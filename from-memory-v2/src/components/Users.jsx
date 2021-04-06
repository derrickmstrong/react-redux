import React, { useEffect } from "react";
import { fetchUsers } from "../feature";
import { useSelector, useDispatch } from "react-redux";

function Users() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    return () => {};
  }, [dispatch]);

  return user.isLoading ? (
    <h2>Loading Users...</h2>
  ) : user.error ? (
    <h2>{user.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {user && user.data.map(({ name, email }, id) => (
          <p key={id}>
            {name} - {email}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Users;
