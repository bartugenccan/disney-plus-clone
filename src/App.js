import React from "react";
import "./App.css";

//Component Imports
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";

//ReactRouter
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
