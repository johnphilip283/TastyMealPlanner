import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './styles/MealCard.scss';

export default class MealCard extends Component {

  render() {
    return (
      <div className='meal-container'>
        <div className='label'>
          <p>{this.props.name}</p>
          <div className='meal-card-food'>
            <p>{this.props.food}</p>
          </div>
          <div className='add-food-button-container'>
            <Link to={`/day/${this.props.day.toLowerCase()}#${this.props.name.toLowerCase()}`}>
              <button className='meal-card-button'>Add food</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}