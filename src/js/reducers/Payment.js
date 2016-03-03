import {
  handleActions
} from 'redux-actions';

const initialState = {
  report: [],
};

export default handleActions({

  GET_REPORT: (state, action) => {

    var refine = action.payload.map(function (user) {
      // console.log(user);
      return {
        ...user,
        total: user.prev + user.salary * user.schedule + user.other + user.base,
        next: user.prev + user.salary * user.schedule + user.other + user.base - user.pay
      };
    });

    return {
      ...state,
      report: refine,
    }
  },

}, initialState);
