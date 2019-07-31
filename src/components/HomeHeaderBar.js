import React, {Component} from 'react';
import './styles/HomeHeaderBar.scss';

export default class HomeHeaderBar extends Component {
  render() {
    return (
      <div className="headerImageContainer">
        <img src={require("../assets/tasty.png")} alt='Tasty logo with lemon and doughnut'/>
        <div className="headerText">
          <h1>Meal Planner!</h1>
        </div>
      </div>
    );
  }
}