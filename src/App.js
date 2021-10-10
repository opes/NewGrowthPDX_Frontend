import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route
              path="/login"
              exact
              render={routerProps => <Login {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={routerProps => <SignUp {...routerProps} />}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
