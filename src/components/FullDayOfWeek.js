import React, { Component } from 'react';

export default class DayOfWeekCard extends Component {
  async componentDidMount() {
    const response = await fetch('http://localhost:5000/api/video', {
      headers: {
        recipe_name: 'Lasagna Poppers'
      }
    });
    console.log(await response.json())
  }

  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}