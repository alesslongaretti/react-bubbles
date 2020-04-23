import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to='/login' className='links'>Login</Link>
          <Link to='/colors'> Colors </Link>

        </header>
        <Switch>
          <PrivateRoute exact path ="/colors" component={BubblePage} />
          
        <Route exact path="/login" component={Login} />
        <Route component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
