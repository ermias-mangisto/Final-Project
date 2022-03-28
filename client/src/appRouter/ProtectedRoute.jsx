import react from "react";
import {Navigate,Route} from "react-router-dom"
 const ProtectedRoute = ({ isLoggedIn,children}) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
    }
    return children;
  }; 
  export default ProtectedRoute;