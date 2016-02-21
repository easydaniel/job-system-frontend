import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Master from './Master.jsx';
import Home from './components/pages/Home.jsx';
import List from './components/pages/List.jsx';
import About from './components/pages/About.jsx';
import App from './containers/App.js';
import NotFound from './components/pages/NotFound.jsx';

function authenticate(nextState, replaceState) {
  /* do Authenticate
  ...
  replaceState(null, '/login);
  */
  replaceState('/');
}

export const history = hashHistory;

export default class Root extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Master}>
          <IndexRoute component={Home} />
          <Route path="list" component={List} />
          <Route path="about" component={About} onEnter={authenticate} />
          <Route path="redux" component={App} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}
