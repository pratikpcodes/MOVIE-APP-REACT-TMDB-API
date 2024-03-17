import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./Components/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider  store={store}>
    <RouterProvider router={AppRouter} />
  </Provider>
);
