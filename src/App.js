// src/App.js

import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UsersList from "./components/UsersList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Users List</h1>
        <UsersList />
      </div>
    </Provider>
  );
};

export default App;
