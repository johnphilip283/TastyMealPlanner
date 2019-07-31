import React, { Component } from 'react';
import MealCard from './MealCard';
import './styles/DayOfWeekCard.scss';

export default class DayOfWeekCard extends Component {

  render() {
    return (
      <div className='day-of-week-card'>
        <div className='day-of-week'>
          {this.props.value}
        </div>
        <MealCard name='Breakfast' day={this.props.value}/>
        <MealCard name='Lunch' day={this.props.value}/>
        <MealCard name='Dinner' day={this.props.value}/>
      </div>
    );
  }
}