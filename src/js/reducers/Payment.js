import {
  handleActions
} from 'redux-actions';

const initialState = {
  report: [],
  hours: [],
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

function refineUserHours(payload) {
  var groupSet = new Set();
  payload.forEach((item) => {
    Object.keys(item.data).forEach((group) => {
      groupSet.add(group);
    });
  });
  var tmp = payload.map((item) => {
    groupSet.forEach((group) => {
      if(typeof(item.data[group]) == "undefined"){
        item.data[group] = 0;
      }
    });
    return item;
  });
  return tmp.map((item) => {
      var data = Object.keys(item.data).map((group) => {
          return {group: item.data[group]};
      });
      item.data = data;
      return item;
  });
}

export default handleActions({

  UPDATE_ROW_REPORT: (state, action) => {
    var modified = state.report.map(function (row) {
      if (row.studentId === action.payload.id) {
        // console.log(row);
        if (action.payload.type === 'other') {
          row.other = action.payload.value;
        } else {
          row.pay = action.payload.value;
        }
        return row;
      }
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

    GET_USER_HOURS : (state, sction) => ({
        ...state,
        hours: refineUserHours(action.payload),
    }),

  },
  initialState);
