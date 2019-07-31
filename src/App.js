import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home'

export default class App extends Component {

  async componentDidMount() {
    const response = await fetch('http://localhost:5000/api/tags');
    const res = await response.json();
    console.log(JSON.parse(res.text));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/home" component={Home}/>
          </div>
        </Router>
      </div>
    );
  }

}