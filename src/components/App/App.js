import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';

const App = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
