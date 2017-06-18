import { takeEvery, put } from 'redux-saga/effects';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

import {
  CREATE_NEW_TASK_LIST,
  createNewTaskListSuccess,
  CREATE_NEW_TASK,
  createNewTaskSuccess,
} from './taskListActions';

function* createNewTaskList(action) {
  yield put(createNewTaskListSuccess({
    ...action.payload,
    id: uuid(),
    createdAt: moment(),
  }));
}

function* createNewTask(action) {
  yield put(createNewTaskSuccess({
    ...action.payload,
    task: {
      ...action.payload.task,
      id: uuid(),
      createdAt: moment(),
    },
  }));
}

export function* watchAddTaskList() {
  yield takeEvery(CREATE_NEW_TASK_LIST, createNewTaskList);
}

export function* watchAddTask() {
  yield takeEvery(CREATE_NEW_TASK, createNewTask);
}

export default [
  watchAddTaskList,
  watchAddTask,
];
