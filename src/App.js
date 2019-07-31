import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home'
import FullDayOfWeek from "./components/FullDayOfWeek";

export default class App extends Component {

  async componentDidMount() {

    this.state = {
      monday: {},
      tuesday: {},
      wednesday: {},
      thursday: {},
      friday: {},
      saturday: {},
      sunday: {}
    };

    const response = await fetch('http://localhost:5000/api/tags');
    const res = await response.json();
    console.log(JSON.parse(res.text));
  }

  onDayOfWeekChange = day => dayChange => {
    this.setState({
      [day]: dayChange
    })
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/home" component={Home}/>
          <Route path='/day/:value' render={(props) => <FullDayOfWeek onDayOfWeekChange={this.onDayOfWeekChange}/>}/>
        </Router>
      </div>
    );
  }

}