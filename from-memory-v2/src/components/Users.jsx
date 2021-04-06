import React, { useEffect } from "react";
import { fetchUsers } from "../feature";
import { useSelector, useDispatch } from "react-redux";

function Users() {
  const loading = useSelector((state) => state.user.loading);
  const user = useSelector((state) => state.user.users);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    return () => {};
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {user.map(({ name, email }, id) => (
          <p key={id}>
            {name} - {email}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Users;
