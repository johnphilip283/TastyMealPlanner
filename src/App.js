import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home'
import FullDayOfWeek from "./components/FullDayOfWeek";
import HomeHeaderBar from "./components/HomeHeaderBar";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monday: [{
        breakfast: {
          name: "",
          ingredients: [],
        },
        lunch: {
          name: "",
          ingredients: [],
        },
        dinner: {
          name: "",
          ingredients: [],
        }
      }],
      tuesday: [{
        breakfast: {
          name: "",
          ingredients: [],
        },
        lunch: {
          name: "",
          ingredients: [],
        },
        dinner: {
          name: "",
          ingredients: [],
        }
      }],
      wednesday: [{
        breakfast: {
          name: "",
          ingredients: [],
        },
        lunch: {
          name: "",
          ingredients: [],
        },
        dinner: {
          name: "",
          ingredients: [],
        }
      }],
      thursday: [{
        breakfast: {
          name: "",
          ingredients: [],
        },
        lunch: {
          name: "",
          ingredients: [],
        },
        dinner: {
          name: "",
          ingredients: [],
        }
      }],
      friday: [{
        breakfast: {
          name: "",
          ingredients: [],
        },
        lunch: {
          name: "",
          ingredients: [],
        },
        dinner: {
          name: "",
          ingredients: [],
        }
      }],
      saturday: [{
        breakfast: {
          name: "",
          ingredients: [],
        },
        lunch: {
          name: "",
          ingredients: [],
        },
        dinner: {
          name: "",
          ingredients: [],
        }
      }],
      sunday: [{
        breakfast: {
          name: "",
          ingredients: [],
        },
        lunch: {
          name: "",
          ingredients: [],
        },
        dinner: {
          name: "",
          ingredients: [],
        }
      }]
    }
  }

  async componentDidMount() {
    // const response = await fetch('http://localhost:5000/api/recipes');
    // const res = await response.json();
    // console.log(JSON.parse(res.text));
  }

  onDayOfWeekChange = day => dayChange => {
    const someDay = this.state[day][0];
    console.log(someDay);
    for (const [mealType, obj] of Object.entries(someDay)) {
      for (const mealInfo of Object.keys(obj)){
        someDay[mealType][mealInfo] = dayChange[mealType][mealInfo]
      }
    }    
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