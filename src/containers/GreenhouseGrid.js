import React, { Component } from 'react';
import GreenhouseHeader from '../components/GreenhouseHeader';
import GreenhouseList from '../components/GreenhouseList';


export default class GreenhouseGrid extends Component {
  render() {
    return <>
    <GreenhouseHeader />
    <GreenhouseList />
    </>;
  }
}
