import React, { Component } from 'react';
import FullMeal from "./FullMeal";
import { Link } from "react-router-dom";

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
    const response = await fetch('http://localhost:5000/recipes');
    const res = await response.json();
    console.log(JSON.parse(res.text));
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
      <>
        <h1>{this.props.match.params.value.toUpperCase()}</h1>
        <FullMeal mealName='Breakfast' onMealChange={this.onMealChange('breakfast')}/>
        <FullMeal mealName='Lunch' onMealChange={this.onMealChange('lunch')}/>
        <FullMeal mealName='Dinner' onMealChange={this.onMealChange('dinner')}/>
      {/*
      ~~ Do cool stuff ~~
      */}
        <Link to={`/home`}>
          <button type='button' onClick={this.submitChangesToHome}>Submit day!</button>
        </Link>
      </>
    );
  }

}