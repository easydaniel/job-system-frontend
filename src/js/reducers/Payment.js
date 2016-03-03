import { handleActions } from 'redux-actions';

const initialState = {
    report: [],
};

export default handleActions({
    GET_REPORT: (state, action) => ({
        ...state,
        report: action.payload,
    }),
}, initialState);
