import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from  "./store";
import { Provider } from "react-redux";
import { deposit } from "./features/accounts/accountSlice";

store.dispatch(deposit(300));
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);
