import { handleActions } from 'redux-actions';
import { find, propEq, update, findIndex, prepend } from 'ramda';

import modes from './taskListModes';

import {
  addNewTaskList,
  cancelAddNewTaskList,
  createNewTaskListSuccess,
  updatePartialTaskList,
  addNewTask,
  cancelAddNewTask,
  updatePartialTask,
  createNewTaskSuccess,
  updateExistingTaskSuccess,
} from './taskListActions';

const getInitialState = () => ({
  lists: [],
  mode: modes.none,
  partialList: {
    name: '',
    tasks: [],
  },
  partialTask: {
    description: '',
    isComplete: false,
  },
});


const allLists = {
  [addNewTaskList]: state => (
    { ...state, mode: modes.addingTaskList }
  ),
  [cancelAddNewTaskList]: state => (
    {
      ...state,
      mode: modes.none,
      partialList: getInitialState().partialList,
    }
  ),
  [updatePartialTaskList]: (state, action) => (
    {
      ...state,
      partialList: { ...state.partialList, ...action.payload },
    }
  ),
  [createNewTaskListSuccess]: (state, action) => (
    {
      ...state,
      lists: [action.payload, ...state.lists],
      mode: modes.none,
      partialList: getInitialState().partialList,
    }
  ),
};

const singleList = {
  [addNewTask]: state => (
    { ...state, mode: modes.addingTask }
  ),
  [cancelAddNewTask]: state => (
    {
      ...state,
      mode: modes.none,
      partialTask: getInitialState().partialTask,
    }
  ),
  [updatePartialTask]: (state, action) => (
    {
      ...state,
      partialTask: { ...state.partialTask, ...action.payload },
    }
  ),
  [createNewTaskSuccess]: (state, action) => {
    const listIndex = findIndex(propEq('id', action.payload.id))(state.lists);
    return ({
      ...state,
      lists: update(listIndex, action.payload)(state.lists),
      mode: modes.none,
      partialTask: getInitialState().partialTask,
    });
  },
  [updateExistingTaskSuccess]: (state, action) => {
    const listIndex = findIndex(propEq('id', action.payload.id))(state.lists);
    return ({
      ...state,
      lists: update(listIndex, action.payload)(state.lists),
    });
  },
};

const taskLists = handleActions({
  ...allLists,
  ...singleList,
}, getInitialState());

export default { taskLists };
