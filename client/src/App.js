import { AlertProvider } from "./context/alertContext/AlertContext";
import UserContextProvider from "./context/userContext/userContext"
import React from "react";
import "./App.css";
import Landing from "./components/pages/landing/landing";
import Router from "./appRouter/AppRouter"
import Profile from "./components/pages/profile/profile";
function App() {
  return (
    <div className="App">
      <AlertProvider>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </AlertProvider>
    </div>
  );
}

export default App;
