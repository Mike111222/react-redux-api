// src/store/users/usersSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Your asynchronous function to fetch users
const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://randomuser.me/api/?results=5"); // Update the URL here
  const data = await response.json();
  return data.results; // The response from the API contains a 'results' property, which is an array of users
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {}, // You can add additional reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null; // Clear any previous errors
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchUsers }; // Export the action creator
export default usersSlice.reducer;
