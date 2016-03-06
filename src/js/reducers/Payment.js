import {
  handleActions
} from 'redux-actions';

const initialState = {
  report: [],
};



function refineReport(payload) {
  return payload.map(function(user) {
    return {
      ...user,
      total: user.prev + user.salary * user.schedule + user.other + user.base,
      next: user.prev + user.salary * user.schedule + user.other + user.base - user.pay
    };
  });
}

export default handleActions({

    UPDATE_ROW_REPORT: (state, action) => {

      var modified = state.report.map(function(row) {
        if (row.studentId === action.payload.id) {
          // console.log(row);
          if (action.payload.type === 'other') {
            row.other = action.payload.value;
          } else {
            row.pay = action.payload.value;
          }
        }
        return row;
      });

      return {
        ...state,
        report: refineReport(modified)
      };
    },

    POST_REPORT: {
      next(state, action) {
        return ({
          ...state,
          message: 'done'
        });
      },
      throw (state, action) {
        return {
          ...state,
          message: action.payload.message,
        };
      }
    },

    GET_REPORT: (state, action) => ({
      ...state,
      report: refineReport(action.payload),
    }),

  },
  initialState);
