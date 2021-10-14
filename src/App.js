import React from 'react';
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
import PlantBuyerDetail from './components/PlantBuyerDetail';

export default function App() {

  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/" exact>
            <PlantGrid />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/greenhouse" exact>
            <GreenhouseGrid />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/list-plant" exact>
            <UploadContainer />
          </Route>
          <Route path="/plant/:id" exact>
            <PlantDetail />
          </Route>
          <Route path="/plants/:id" exact>
            <PlantBuyerDetail />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
