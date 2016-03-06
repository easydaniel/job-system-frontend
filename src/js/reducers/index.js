import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import github from './Github';
import apiStatus from './ApiStatus';
import payment from './Payment';
import login from './Login';

export default combineReducers({
  github,
  payment,
  apiStatus,
  login,
  routing,
});
