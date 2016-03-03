import {
  handleActions
} from 'redux-actions';

const initialState = {
  report: [],
};


function refineReport(state) {
  return state.map(function(user) {
    return {
      ...user,
      total: user.prev + user.salary * user.schedule + user.other + user.base,
      next: user.prev + user.salary * user.schedule + user.other + user.base - user.pay
    };
  });
}

export default handleActions({

  GET_REPORT: (state, action) => ({
    ...state,
    report: refineReport(action.payload),
  }),

}, initialState);
