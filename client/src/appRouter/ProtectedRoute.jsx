import react from "react";
import {Link,Route} from "react-router-dom"
 const ProtectedRoute = ({ isLoggedIn,children}) => {
  if (!isLoggedIn) {
    return <Link to="/" />;
    }
    return children;
  }; 
  export default ProtectedRoute;