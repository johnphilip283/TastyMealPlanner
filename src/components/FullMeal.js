import React, { Component } from 'react';
import './styles/FullMeal.scss';

export default class FullMeal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prev_calories: 0,
      meal: null,
      ingredients: [],
      nutrition: []
    }
  }

  async getIngredients(name) {
    const response = await fetch('http://localhost:5000/api/ingredients/text', {
      headers: {
        recipe_name: name
      }
    });
    return await response.json();
  }

  async getNutritionInfo(name) {
    const response = await fetch('http://localhost:5000/api/nutrition', {
      headers: {
        recipe_name: name
      }
    });
    return await response.json();
  }

  handleMealChange = event => {
    this.props.onMealChange(event.target.value);
    this.setState({
      meal: event.target.value
    })
  };

  handleEnterFood = event => {
    if (event.keyCode === 13) {
      if (event.target.value === "") {
        this.setState({
          ingredients: []
        })
        this.setState({
          nutrition: []
        })
        this.props.onMealEnterUpdateCal(0);
      } else {
        this.getIngredients(event.target.value)
          .then(returnedInfo => {
            this.props.onMealEnterUpdateIng(returnedInfo);
            this.setState({
              ingredients: returnedInfo
            })
          });

        this.getNutritionInfo(event.target.value)
          .then(returnedInfo => {
            this.props.onMealEnterUpdateCal(returnedInfo.calories);
            this.setState({
              prev_calories: returnedInfo.calories,
              nutrition: returnedInfo
            })
          });
      }
    }
 }

  render() {
    return (
      <>
        <h1>{this.props.mealName}</h1>
        <label for="recipesearch" class='visuallyhidden'>Search recipes: </label>
        <input type="text" name='recipesearch' id='recipesearch' placeholder="Search recipes..."
          onChange={this.handleMealChange}
          onKeyDown={this.handleEnterFood}
        />
        <div className="ingredients-and-nutrition">
          <div className="ingredients">
            <div className="ingredient-list-title">
              <p>Ingredient List:</p>
            </div>
            {this.state.ingredients.map(function(d, idx){
              return (<li key={idx}>{d}</li>)
            })}
          </div>
          <div className="nutrition-info">
            <div className="nutrition-title">
              <p>Nutrition Info:</p>
            </div>
            {Object.keys(this.state.nutrition).map(key => {
              if (key !== 'updated_at') {
                return (<li>{key}: {this.state.nutrition[key]}</li>)
              }
            })}
          </div>
        </div>
      </>
    );
  }
}