import React, { Component } from "react";
import HomeHeaderBar from '../components/HomeHeaderBar';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <HomeHeaderBar/>
      </div>
    );
  }
}