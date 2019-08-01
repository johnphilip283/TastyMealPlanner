import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home'
import FullDayOfWeek from "./components/FullDayOfWeek";
import HomeHeaderBar from "./components/HomeHeaderBar";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    }
  }

  async componentDidMount() {
    // const response = await fetch('http://localhost:5000/api/recipes');
    // const res = await response.json();
    // console.log(JSON.parse(res.text));
  }

  onDayOfWeekChange = day => dayChange => {
    this.setState({
      [day]: dayChange
    })
  };

  fullWeekRenderer = props => <FullDayOfWeek {...props} onDayOfWeekChange={this.onDayOfWeekChange(props.match.params.value)}/>;
  
  render() {
    return (
      <>
        <div className='home-header'>
          <HomeHeaderBar/>
        </div>
        <Router>
          <Route exact path='/' render={(props) => <Home fullWeekInfo={this.state} {...props}/>}/>
          <Route path='/home' render={(props) => <Home fullWeekInfo={this.state} {...props}/>}/>
          <Route path='/day/:value' render={this.fullWeekRenderer}/>
        </Router>
      </>
    );
  }

}