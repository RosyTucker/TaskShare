import { takeEvery, put, select } from 'redux-saga/effects';
import { propEq, findIndex, update, prepend, find } from 'ramda';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import { getTaskList, getExistingTaskLists } from './taskListSelectors';

import {
  CREATE_NEW_TASK_LIST,
  createNewTaskListSuccess,
  CREATE_NEW_TASK,
  createNewTaskSuccess,
  UPDATE_EXISTING_TASK,
  updateExistingTaskSuccess,
} from './taskListActions';

function* createNewTaskList(action) {
  yield put(createNewTaskListSuccess({
    ...action.payload,
    id: uuid(),
    createdAt: moment(),
  }));
}

function* createNewTask(action) {
  const taskLists = yield select(getExistingTaskLists);

  const taskList = find(propEq('id', action.payload.listId))(taskLists);

  const updatedTasks = prepend({
    ...action.payload.task,
    createdAt: moment(),
    id: uuid(),
  })(taskList.tasks);

  const updatedList = {
    ...taskList,
    tasks: updatedTasks,
  };

  yield put(createNewTaskSuccess(updatedList));
}

function* updateExistingTask(action) {
  const taskId = action.payload.taskId;
  const taskListId = action.payload.listId;
  const fields = action.payload.fields;

  const taskList = yield select(getTaskList, taskListId);

  const taskIndex = findIndex(propEq('id', taskId))(taskList.tasks);

  const updatedTasks = update(taskIndex, { ...taskList.tasks[taskIndex], ...fields })(taskList.tasks);

  yield put(updateExistingTaskSuccess({
    ...taskList,
    tasks: updatedTasks,
  }));
}


export function* watchAddTaskList() {
  yield takeEvery(CREATE_NEW_TASK_LIST, createNewTaskList);
}

export function* watchAddTask() {
  yield takeEvery(CREATE_NEW_TASK, createNewTask);
}

export function* watchUpdateExistingTask() {
  yield takeEvery(UPDATE_EXISTING_TASK, updateExistingTask);
}

export default [
  watchAddTaskList,
  watchAddTask,
  watchUpdateExistingTask,
];
