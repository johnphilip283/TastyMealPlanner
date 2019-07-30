import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home'
import Data from './pages/Data'
// import Test from './pages/Test'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" component={Home}/>
          <Route path='/data' component={Data}/>
          {/* <Route path='/test' component={Data}/> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
