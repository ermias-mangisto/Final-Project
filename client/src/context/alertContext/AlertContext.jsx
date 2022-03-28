import React, { useEffect, useState } from "react";
import { GetAllAlert } from "../../services/alertService";

export const AlertContext = React.createContext();

export const  AlertProvider= ({ children }) => {
  const [alert, setAlert] = useState([]);
  useEffect(() => {
    setInterval(() => {
    GetAllAlert().then((res) => setAlert(res));      
    }, 15000);
  }, []);
  
  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
