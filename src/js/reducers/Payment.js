import {
  handleActions
} from 'redux-actions';

const initialState = {
  report: [],
};

export default handleActions({

  REFINE_REPORT: (state, action) => {
    var refine = state.report.map(function(user) {
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

  GET_REPORT: (state, action) => ({
    ...state,
    report: action.payload,
  }),

}, initialState);
