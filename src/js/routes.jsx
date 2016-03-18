import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Master from './Master.jsx';
import Payment from './containers/Payment.js';
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
          <IndexRoute component={Payment} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    );
  }
}
