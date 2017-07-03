import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home } from './routes';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}
