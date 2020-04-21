import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="App">
      <h1>Friends Auth Project</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/protected" component={Friends} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
