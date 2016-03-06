import {
  handleActions
} from 'redux-actions';

const initialState = {
    token: '',
    user: {},
};


export default handleActions({

  GET_TOKEN: {
    next(state, action) {
      console.log(action);
      return {
        ...state,
        token: action.payload,
      }
  },
    throw(state, action) {
      return {
        ...state,
        token: ''
      };
    }
  },
  GET_USER_INFO: {
    next(state, action) {
      return {
        ...state,
        user: action.payload,
      }
    },
    throw(state, action) {
      return {
        ...state,
        user: {}
      }
    }
  }

}, initialState);
