import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
import github from './Github';
import apiStatus from './ApiStatus';
import payment from './Payment';

export default combineReducers({
  github,
  payment,
  apiStatus,
  routing,
});
