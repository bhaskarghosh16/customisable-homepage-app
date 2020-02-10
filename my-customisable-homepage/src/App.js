import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./components/Todo";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/todo" component={Todo} exact />
          
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;