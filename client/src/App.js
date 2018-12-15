import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandPage from "./pages/landingPage/landPage";
import LogIn from "./pages/signIn/login";
import signUp from "./pages/signUp/signup"
import './App.css';
import addASong from'./pages/songs/addASongjsx'
import about from './pages/layout/about'
import{BrowserRouter} from 'react-router-dom'



const App = () => (
  <Router>
  <Switch>
    <Route exact path="/" component= {LandPage}/>
    <Route exact path="/login" component= {LogIn}/>
    <Route exact path="/signup" component= {signUp}/>
    <Route exact path="/songs" component= {addASong}/>
    <Route exact path="/about" component= {about}/>

    
    </Switch>

  </Router>

);


export default App;
