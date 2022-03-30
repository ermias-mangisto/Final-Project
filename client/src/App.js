import { AlertProvider } from "./context/alertContext/AlertContext";
import UserContextProvider from "./context/userContext/userContext"
import { ModeProvider } from "./context/modeContext/ModeContext";
import React from "react";
import "./App.css";
import Landing from "./components/pages/landing/landing";
import Router from "./appRouter/AppRouter"
import Profile from "./components/pages/profile/profile";
import CheckAlert from "./components/parts/alerts/checkAlert";
function App() {
  return (
    <div className="App">

      <ModeProvider>
        <AlertProvider>
          <UserContextProvider>
            <Router />
          </UserContextProvider>
        </AlertProvider>
      </ModeProvider>

    </div>
  );
}

export default App;
