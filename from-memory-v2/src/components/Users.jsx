import React, { useEffect } from "react";
import { fetchUsers } from "../feature";
import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  // user variable includes all user state in store ie. isLoading, data and error
  const user = useSelector((state) => state.user);
  // dispatch the fetchUsers function from userActions by way of Redux Thunk on page load via useEffect below
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
        {/* if user data is not empty map through the data property */}
        {user &&
          user.data.map(({ name, email }, id) => (
            <p key={id}>
              {name} - {email}
            </p>
          ))}
      </div>
    </div>
  );
}

export default Users;
