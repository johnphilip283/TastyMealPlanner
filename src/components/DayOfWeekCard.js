import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './styles/DayOfWeekCard.scss';

export default class DayOfWeekCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast: null,
      lunch: null,
      dinner: null
    };
  }

  render() {
    return (
      <div className='day-of-week-card'>
        <div className='day-of-week'>
          {this.props.value}
        </div>
        <div className='breakfast-container'>
          <div className='label'>
            <p>Breakfast</p>
            <div className='add-food-button-container'>
              <Link to={`/${this.props.value}`}>
                <button className='add-food-button'>Add food</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='lunch-container'>
          <div className='label'>
            <p>Lunch</p>
            <div className='add-food-button-container'>
              <Link to={`/${this.props.value}`}>
                <button className='add-food-button'>Add food</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='dinner-container'>
          <div className='label'>
            <p>Dinner</p>
            <div className='add-food-button-container'>
              <Link to={`/${this.props.value}`}>
                <button className='add-food-button'>Add food</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}