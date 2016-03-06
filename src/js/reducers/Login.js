import {
  handleActions
} from 'redux-actions';

const initialState = {
    token: '',
};


export default handleActions({

  GET_TOEKN: (state, action) => {
    return {
      ...state,
      token: action.payload,
    }
  }

}, initialState);
