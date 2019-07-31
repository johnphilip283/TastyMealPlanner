import React, { Component } from 'react';

export default class DayOfWeekCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          JSON.stringify(this.props)
        }
      </div>
    );
  }
}