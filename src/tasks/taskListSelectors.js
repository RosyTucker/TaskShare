import moment from 'moment';
import { find, propEq } from 'ramda';

const mapTaskList = taskList => ({
  ...taskList,
  createdAt: moment(taskList.createdAt).format('LT, L'),
  numTasksCompleted: taskList.tasks.filter(task => task.isComplete).length,
});

export const getMode = state => state.taskLists.mode;

export const getPartialTaskList = state => mapTaskList(state.taskLists.partialList);

export const getFormattedExistingTaskLists = state => state.taskLists.lists.map(mapTaskList);

export const getExistingTaskLists = state => state.taskLists.lists;

export const getFormattedTaskList = (state, id) => mapTaskList(find(propEq('id', id))(state.taskLists.lists));

export const getTaskList = (state, id) => find(propEq('id', id))(state.taskLists.lists);

export const getPartialTask = state => state.taskLists.partialTask;
