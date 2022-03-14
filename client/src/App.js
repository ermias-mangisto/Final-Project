import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserContextProvider from "./context/userContext/userContext"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <UserContextProvider>
     </UserContextProvider>
      </header>
    </div>
  );
}

export default App;
