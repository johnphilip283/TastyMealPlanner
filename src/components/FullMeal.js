import React, { Component } from 'react';

export default class FullMeal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      mealContent: []
    }
  }

  handleMealChange = event => {
    this.props.onMealChange(event.target.value);
    this.setState({
      mealContent: event.target.value
    })
  };

  render() {
    return (
      <>
        <h1>{this.props.mealName}</h1>
        <label for="recipesearch" class='visuallyhidden'>Search recipes: </label>
        <input type="text" name='recipesearch' id='recipesearch' placeholder="Search recipes..."
               onChange={this.handleMealChange}/>
      </>
    );
  }
}