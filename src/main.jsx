import React from "react";
import ReactDOM from "react-dom/client";
import BackgroundBlur from "./Styling/BackgroundBlur"
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="flex flex-col justify-center items-center relative isolate w-full">
    <App />
    <BackgroundBlur />
  </div>
);
