import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import List from '../../pages/List';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
