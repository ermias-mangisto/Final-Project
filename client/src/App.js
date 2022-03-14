import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Footer from "./components/parts/footer/footer";
import NavBar from "./components/parts/navbar/navbar";
import Landing from "./components/pages/landing/landing";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <NavBar />
        <Landing />
        <Footer />
      {/* </header> */}
    </div>
  );
}

export default App;
