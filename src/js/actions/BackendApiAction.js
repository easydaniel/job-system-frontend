/**
 * Created by tachien on 2016/2/21.
 */
import { createAction } from 'redux-actions';
import WebAPIUtil from '../utils/WebAPIUtil.js';


export const getAllUsers = createAction('GET_ALL_USERS', WebAPIUtil.getUserList);
export const getAllGroups = createAction('GET_ALL_GROUPS');
