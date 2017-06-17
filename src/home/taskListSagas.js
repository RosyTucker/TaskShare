import { call, put, takeEvery, select, take, fork } from 'redux-saga/effects';

import { ADD_NEW_TASK_LIST } from './taskListActions';

function* addNewTaskList() {

}

export function* watchAddTaskList() {
  yield takeEvery(ADD_NEW_TASK_LIST, addNewTaskList);
}

export default [
  watchAddTaskList,
];