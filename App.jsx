import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

