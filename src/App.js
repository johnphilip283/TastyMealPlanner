import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home'

function App() {
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

export default App;
