import { useEffect,useState,createContext } from "react";
import setAuthToken from "../../uitls/setAuthToken";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() =>{
    if (localStorage.token!==undefined) {
        const token = localStorage.getItem("token");
        setAuthToken(token);
        const decoded = jwt_decode(token);
        setUser(decoded.user);
    }
    }, []); 


  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;