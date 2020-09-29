import React from 'react';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
import Header from './Header';
import Home from './Home';
import Reciped from './recip';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/">
            <Reciped />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
