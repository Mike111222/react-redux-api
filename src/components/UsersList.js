// src/components/UsersList.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/users/usersSlice";
import "./UsersList.css"; // Import the CSS file

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Check if users is an array before using map
  if (!Array.isArray(users)) {
    return <p>No users found.</p>;
  }

  // Loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Default state
  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>
          <strong>Name:</strong> {user.name.first} {user.name.last}
          <br />
          <strong>Email:</strong> {user.email}
          <br />
          <strong>Username:</strong> {user.login.username}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
