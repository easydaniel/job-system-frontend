import { createAction } from 'redux-actions';
import WebAPIUtil from '../utils/WebAPIUtil.js';


export const updateRowReport = createAction('UPDATE_ROW_REPORT');
export const getReport = createAction('GET_REPORT', WebAPIUtil.getReport);
export const postReport = createAction('POST_REPORT', WebAPIUtil.postReport);
export const getMonthReport = createAction('POST_REPORT', WebAPIUtil.getMonthReport);
export const getUserHours = createAction('GET_REPORT', WebAPIUtil.getUserHours);
