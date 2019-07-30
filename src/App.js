import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" component={Home}/>
          {/* <Route path='/landing' component={Landing}/> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
