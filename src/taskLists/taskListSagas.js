import { takeEvery, put } from 'redux-saga/effects';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

import { CREATE_NEW_TASK_LIST, createNewTaskListSuccess } from './taskListActions';

function* createNewTaskList(action) {
  yield put(createNewTaskListSuccess({
    ...action.payload,
    id: uuid(),
    createdAt: moment(),
  }));
}

export function* watchAddTaskList() {
  yield takeEvery(CREATE_NEW_TASK_LIST, createNewTaskList);
}

export default [
  watchAddTaskList,
];
