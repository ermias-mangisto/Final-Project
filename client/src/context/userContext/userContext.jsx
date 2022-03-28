import { useEffect, useState, createContext } from "react";
import setAuthToken from "../../uitls/setAuthToken";
import jwt_decode from "jwt-decode";
import { GetAllAlert } from "../../services/alertService";
export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayAlerts,setDisplayAlerts] = useState(false); //! ADDED BY IZHAK
  useEffect(() =>{
    if (localStorage.token!==undefined) {
        const token = localStorage.getItem("token");
        setAuthToken(token);
        const decoded = jwt_decode(token);
        setUser(decoded.user);
        setIsLoggedIn(true)
    }
    }, []); 
const [counter,setCounter] = useState(0); //! ADDED BY IZHAK
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        displayAlerts,setDisplayAlerts, //! ADDED BY IZHAK
        counter,setCounter, //! ADDED BY IZHAK
        isLoggedIn, setIsLoggedIn
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
