import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './containers/About';
import Login from './components/Login';
import SignUp from './components/SignUp';

import PlantGrid from './containers/PlantGrid';
import GreenhouseGrid from './containers/GreenhouseGrid';
import UploadContainer from './containers/UploadContainer';

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* signup/login Nav */}
        <Navbar />
        <div>
          <Switch>
          <Route
              path="/"
              exact
              render={routerProps => <PlantGrid {...routerProps} />}
            />
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
            <Route
              path="/greenhouse"
              exact
              render={routerProps => <GreenhouseGrid {...routerProps} />}
            />
            <Route
              path="/about"
              exact
              render={routerProps => <About {...routerProps} />}
            />
            <Route
              path="/upload"
              exact
              render={routerProps => <UploadContainer {...routerProps} />}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
