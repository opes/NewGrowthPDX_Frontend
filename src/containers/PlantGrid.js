import React, { Component } from 'react';
import HomeHeader from '../components/HomeHeader';
import HomePlantList from '../components/HomePlantList';


export default class App extends Component {
  render() {
    return <>
    <HomeHeader />
    <HomePlantList />
    </>;
  }
}
