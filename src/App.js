import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/layout/NavBar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer></ToastContainer>
        <NavBar></NavBar>
        <Switch>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" exact component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
