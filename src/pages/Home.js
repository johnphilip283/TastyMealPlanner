import React, { Component } from "react";
import HomeHeaderBar from '../components/HomeHeaderBar';
import DayOfWeekCard from '../components/DayOfWeekCard';
import './styles/Home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        GroceryListData: []
    }
  }

  render() {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
      <div className='home-container'>
        <div className='home-header'>
          <HomeHeaderBar/>
        </div>
        <div className='home-content'>
          <div className='home-planner-cards'>
            <div className='planner-card'>
              {
                days.map(day => <DayOfWeekCard value={day}/>)
              }
            </div>
          </div>
          <div className='grocery-list-button-container'>
            <button className='grocery-list-button'>Get grocery list!</button>
          </div>
        </div>
      </div>
    );
  }
}