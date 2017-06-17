import { createAction } from 'redux-actions';

export const ADD_NEW_TASK_LIST = 'ADD_NEW_TASK_LIST';
export const CANCEL_ADD_NEW_TASK_LIST = 'CANCEL_ADD_NEW_TASK_LIST';

export const addNewTaskList = createAction(ADD_NEW_TASK_LIST);
export const cancelAddNewTaskList = createAction(CANCEL_ADD_NEW_TASK_LIST);
