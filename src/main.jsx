import React from "react";
import ReactDOM from "react-dom/client";
import BackgroundBlur from "./Styling/BackgroundBlur"
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./Context/DataContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
     <ToastContainer
        position="top-right"
        autoClose={5000} // Tiempo en milisegundos antes de que se cierre automáticamente
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <div className="flex flex-col justify-center items-center relative isolate w-full">
      <App />
      <BackgroundBlur />
    </div>
  </DataProvider>
);
