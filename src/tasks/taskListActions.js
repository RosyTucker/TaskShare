import { createAction } from 'redux-actions';

export const ADD_NEW_TASK_LIST = 'ADD_NEW_TASK_LIST';
export const CANCEL_ADD_NEW_TASK_LIST = 'CANCEL_ADD_NEW_TASK_LIST';
export const UPDATE_PARTIAL_TASK_LIST = 'UPDATE_PARTIAL_TASK_LIST';
export const CREATE_NEW_TASK_LIST = 'CREATE_NEW_TASK_LIST';
export const CREATE_NEW_TASK_LIST_SUCCESS = 'CREATE_NEW_TASK_LIST_SUCCESS';

export const addNewTaskList = createAction(ADD_NEW_TASK_LIST);
export const cancelAddNewTaskList = createAction(CANCEL_ADD_NEW_TASK_LIST);
export const updatePartialTaskList = createAction(UPDATE_PARTIAL_TASK_LIST);

export const createNewTaskList = createAction(CREATE_NEW_TASK_LIST);
export const createNewTaskListSuccess = createAction(CREATE_NEW_TASK_LIST_SUCCESS);
