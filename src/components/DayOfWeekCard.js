import React, {Component} from 'react';
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
      <div className='card'>
        <div className='DayOfWeek'>
          {this.props.value}
        </div>
        <div className='breakfast'>
          <div className='label'>
            <p>Breakfast</p>
          </div>
        </div>
        <div className='lunch'>
          <div className='label'>
            <p>Lunch</p>
          </div>
        </div>
        <div className='dinner'>
          <div className='label'>
            <p>Dinner</p>
          </div>
        </div>
      </div>
    );
  }
}