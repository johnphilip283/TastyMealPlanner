import React, { Component } from 'react';
import FullMeal from "./FullMeal";
import { Link } from "react-router-dom";
import './styles/FullDayOfWeek.scss';

export default class FullDayOfWeek extends Component {

  constructor(props) {
    super(props);
    this.state = {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:5000/api/video', {
      headers: {
        recipe_name: 'Lasagna Poppers'
      }
    });
    console.log(await response.json())
  }

  onMealChange = meal => mealChange => {
    this.setState({
      [meal]: mealChange
    })
  };

  submitChangesToHome = () => {
    this.props.onDayOfWeekChange({ ...this.state });
  };

  render() {
    return (
      <div className='full-day-of-week-container'>
        <h1>{this.props.match.params.value.toUpperCase()}</h1>
        <FullMeal mealName='Breakfast' onMealChange={this.onMealChange('breakfast')}/>
        <FullMeal mealName='Lunch' onMealChange={this.onMealChange('lunch')}/>
        <FullMeal mealName='Dinner' onMealChange={this.onMealChange('dinner')}/>
      {/*
      ~~ Do cool stuff ~~
      */}
        <div className='submit-day-button-container'>
          <Link to={`/home`}>
            <button type='button' className='submit-day-button' onClick={this.submitChangesToHome}>Submit day!</button>
          </Link>
        </div>
      </div>
    );
  }
}