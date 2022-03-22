import React, { useEffect, useState } from "react";
import { GetAllAlert } from "../../services/alertService";

export const AlertProvider = React.createContext();

export const AlertContext = ({ children }) => {
  const [alert, setAlert] = useState([]);
  useEffect(() => {
    GetAllAlert().then((res) => setAlert(res));
  }, []);
  
  return (
    <AlertProvider.Provider value={{ alert, setAlert }}>
      {children}
    </AlertProvider.Provider>
  );
};
