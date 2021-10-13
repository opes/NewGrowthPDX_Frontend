import React, { useState, useEffect } from 'react';
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
import PlantDetail from './components/PlantDetail';

export default function App() {
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem('token')));

  const token = () => {
    const localToken = localStorage.getItem('token');

    const parsedToken = JSON.parse(localToken);
    console.log(parsedToken);
    if (!parsedToken) setLoggedUser('');
    else setLoggedUser(parsedToken);
  };

  useEffect(() => {
    token();
  }, [])

  return (
    <Router>
      <Navbar loggedUser={loggedUser} />
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
          <Route path="/greenhouse" exact>
            <GreenhouseGrid loggedUser={loggedUser} />
          </Route>
          <Route
            path="/about"
            exact
            render={routerProps => <About {...routerProps} />}
          />
          <Route
            path="/list-plant"
            exact
            render={routerProps => <UploadContainer {...routerProps} />}
          />
          <Route
            path="/plant/:id"
            exact
            render={routerProps => <PlantDetail {...routerProps} />}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
