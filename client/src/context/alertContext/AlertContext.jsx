import React, { useEffect, useState } from "react";
import { GetAllAlert } from "../../services/alertService";

export const AlertContext = React.createContext();

export const AlertProvider = ({ children }) => {
  const [alerts, setAlert] = useState([]);
  
  useEffect(() => {
    GetAllAlert().then((res) => setAlert(res));
    console.log("first");
    setInterval(() => {
      GetAllAlert().then((res) => setAlert(res));
    }, 15000);
  }, []);

  return (
    <AlertContext.Provider value={{ alerts, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
