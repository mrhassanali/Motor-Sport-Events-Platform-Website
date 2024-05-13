import React from "react";
import "./css/App.css";
import router from "./Router";
import { RouterProvider } from "react-router-dom";

// Redux setup
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
