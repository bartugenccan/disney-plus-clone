import React from "react";
import "./App.css";

//Component Imports
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
