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

  renderCard(day) {
    return <DayOfWeekCard value={day} />;
  }

  render() {
    return (
      <div className='home-container'>
        <div className='home-header'>
          <HomeHeaderBar/>
        </div>
        <div className='home-content'>
          <div className='home-planner-cards'>
            <div className='planner-card'>
              {this.renderCard('Monday')}
              {this.renderCard('Tuesday')}
              {this.renderCard('Wednesday')}
              {this.renderCard('Thursday')}
              {this.renderCard('Friday')}
              {this.renderCard('Saturday')}
              {this.renderCard('Tuesday')}
            </div>
          </div>
          <div className='bottom-of-home-button'>
            <button class='grocery-list-button'>Get grocery list!</button>
          </div>
        </div>
      </div>
    );
  }
}