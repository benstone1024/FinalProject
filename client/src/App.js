import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandPage from "./pages/landingPage/landPage";
import LogIn from "./pages/signIn/login";
import signUp from "./pages/signUp/signup"
import './App.css';



const App = () => (
  <Router>
  <Switch>
    <Route exact path="/" component= {LandPage}/>
    <Route exact path="/login" component= {LogIn}/>
    <Route exact path="/signup" component= {signUp}/>
    
    </Switch>

  </Router>

);


export default App;
