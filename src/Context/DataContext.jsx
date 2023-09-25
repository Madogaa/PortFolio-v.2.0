import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [alerts, setAlerts] = useState([]);
  const [language, setLanguage] = useState('es');

  const handleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

    const addAlert = (message, type = 'info') => {
    toast[type](message); // Muestra el mensaje como notificación emergente
  };


  return (
    <DataContext.Provider value={{ addAlert, language , handleLanguage}}>
      {children}
    </DataContext.Provider>
  );
}
