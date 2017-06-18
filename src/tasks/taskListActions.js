import { createAction } from 'redux-actions';

// All Lists
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

// Single List
export const ADD_NEW_TASK = 'ADD_NEW_TASK';
export const CANCEL_ADD_NEW_TASK = 'CANCEL_ADD_NEW_TASK';
export const UPDATE_PARTIAL_TASK = 'UPDATE_PARTIAL_TASK';
export const CREATE_NEW_TASK = 'CREATE_NEW_TASK';
export const CREATE_NEW_TASK_SUCCESS = 'CREATE_NEW_TASK_SUCCESS';

export const UPDATE_EXISTING_TASK = 'UPDATE_EXISTING_TASK';
export const UPDATE_EXISTING_TASK_SUCCESS = 'UPDATE_EXISTING_TASK_SUCCESS';

export const addNewTask = createAction(ADD_NEW_TASK);
export const cancelAddNewTask = createAction(CANCEL_ADD_NEW_TASK);
export const updatePartialTask = createAction(UPDATE_PARTIAL_TASK);

export const updateExistingTask = createAction(UPDATE_EXISTING_TASK);
export const updateExistingTaskSuccess = createAction(UPDATE_EXISTING_TASK_SUCCESS);

export const createNewTask = createAction(CREATE_NEW_TASK);
export const createNewTaskSuccess = createAction(CREATE_NEW_TASK_SUCCESS);
