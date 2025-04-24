import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./output.css";
import App from "./App"; // ✅ Import App (which contains all your routes)
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
