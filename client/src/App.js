


import UserContextProvider from "./context/userContext/userContext"
import React from "react";
import "./App.css";
import Landing from "./components/pages/landing/landing";


function App() {
  return (
    <div className="App">


      <UserContextProvider>
       <Landing />
     </UserContextProvider>



    </div>
  );
}

export default App;
