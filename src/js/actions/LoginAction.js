import { createAction } from 'redux-actions';
import WebAPIUtil from '../utils/WebAPIUtil.js';

export const getToken = createAction('GET_TOKEN', WebAPIUtil.getToken);
export const getUserInfo = createAction('GET_USER_INFO', WebAPIUtil.getUserInfo);
