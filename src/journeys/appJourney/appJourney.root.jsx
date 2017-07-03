import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home } from './routes';

const Root = () => (
  <Router>
    <div className="wrapper">
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
    </div>
  </Router>
);

export default Root;
