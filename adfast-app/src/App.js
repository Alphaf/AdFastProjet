import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/Main";
function App(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}>
            <Home></Home>
          </Route>
          <Route path="/log-in" component={Main}>
            <Main {...props} className="App" app={this}></Main>{" "}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
