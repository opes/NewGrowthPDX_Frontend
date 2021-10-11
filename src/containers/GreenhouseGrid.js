import React, { Component } from 'react';
import GreenhouseHeader from '../components/GreenhouseHeader';
import GreenhouseList from '../components/GreenhouseList';


export default class App extends Component {
  render() {
    return <>
    <GreenhouseHeader />
    <GreenhouseList />
    </>;
  }
}
