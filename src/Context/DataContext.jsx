import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [alerts, setAlerts] = useState([]);

    const addAlert = (message, type = 'info') => {
    toast[type](message); // Muestra el mensaje como notificación emergente
  };

  const removeAlert = (id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  return (
    <DataContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </DataContext.Provider>
  );
}
