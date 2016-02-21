/**
 * Created by tachien on 2016/2/21.
 */
import { handleActions } from 'redux-actions';

const initialState = {
  users: [],
  groups: []
};

export default handleActions({
  GET_ALL_USERS: {
    next(state, action) {
      //console.log('GetUserAction');
      //console.log(action.payload);
      return ({
        ...state,
        message: 'done',
        users: action.payload,
      });
    },
    throw(state, action) {
      return {
        ...state,
        message: action.payload.message,
      };
    },
  },
}, initialState);
