import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import List from '../../pages/List';
import Create from '../../pages/Create';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
