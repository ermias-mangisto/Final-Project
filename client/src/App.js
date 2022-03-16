


import UserContextProvider from "./context/userContext/userContext"
import React from "react";
import "./App.css";
import Landing from "./components/pages/landing/landing";
import Router from "./appRouter/AppRouter"


function App() {
  return (
    <div className="App">


      <UserContextProvider>
       <Router/>
     </UserContextProvider>



    </div>
  );
}

export default App;
