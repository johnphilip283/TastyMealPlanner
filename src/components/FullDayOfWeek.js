import React, { Component } from 'react';
import FullMeal from "./FullMeal";
import { Link } from "react-router-dom";
import './styles/FullDayOfWeek.scss';

export default class FullDayOfWeek extends Component {

  constructor(props) {
    super(props);
    this.state = {
      caloriesRemaining: 2000,
      breakfast: {
        name: "",
        ingredients: [],
        prev_calories: 0
      },
      lunch: {
        name: "",
        ingredients: [],
        prev_calories: 0
      },
      dinner: {
        name: "",
        ingredients: [],
        prev_calories: 0
      }
    }
  }

  onMealChange = meal => mealChange => {
    const someMeal = this.state[meal];
    someMeal.name = mealChange
    this.setState({
      meal: someMeal
    })
  };

  onMealEnterUpdateIng = meal => ingredients => {
    const someMeal = this.state[meal];
    if (this.state[meal].name === "") {
      someMeal.ingredients = []
    } else {
      someMeal.ingredients = ingredients
    }
    this.setState({
      meal: someMeal
    })
  };

  onMealEnterUpdateCal = meal => calories => {
    const someMeal = this.state[meal];
    const current_calories = this.state.caloriesRemaining;
    if (this.state[meal].name === "") {
      this.setState({
        caloriesRemaining: current_calories + someMeal.prev_calories
      })
    } else {
      someMeal.prev_calories = calories
      this.setState({
        caloriesRemaining: current_calories - calories,
        meal: someMeal
      })
    }
  };

  submitChangesToHome = () => {
    this.props.onDayOfWeekChange({ ...this.state });
  };

  render() {
    return (
      <div className='full-day-of-week-container'>
        <div className='full-day-of-week-top-row'>
          <h1>{this.props.match.params.value.toUpperCase()}</h1>
          <h1>Calories Remaining: {this.state.caloriesRemaining}</h1>
        </div>
        <FullMeal mealName='Breakfast' 
          onMealChange={this.onMealChange('breakfast')} 
          onMealEnterUpdateIng={this.onMealEnterUpdateIng('breakfast')}
          onMealEnterUpdateCal={this.onMealEnterUpdateCal('breakfast')}
        />
        <FullMeal mealName='Lunch' 
          onMealChange={this.onMealChange('lunch')} 
          onMealEnterUpdateIng={this.onMealEnterUpdateIng('lunch')}
          onMealEnterUpdateCal={this.onMealEnterUpdateCal('lunch')}
        />
        <FullMeal mealName='Dinner' 
          onMealChange={this.onMealChange('dinner')} 
          onMealEnterUpdateIng={this.onMealEnterUpdateIng('dinner')}
          onMealEnterUpdateCal={this.onMealEnterUpdateCal('dinner')}
        />
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