import { createAction } from 'redux-actions';
import WebAPIUtil from '../utils/WebAPIUtil.js';


export const updateRowReport = createAction('UPDATE_ROW_REPORT');
export const getReport = createAction('GET_REPORT', WebAPIUtil.getReport);
