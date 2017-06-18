import { handleActions } from 'redux-actions';
import moment from 'moment';
import modes from './taskListModes';

import {
  addNewTaskList,
  cancelAddNewTaskList,
  createNewTaskListSuccess,
  updatePartialTaskList,
} from './taskListActions';

const getInitialState = () => ({
  lists: [],
  mode: modes.none,
  partial: {
    name: '',
    createdAt: moment(),
    tasks: [],
  },
});

const taskLists = handleActions({
  [addNewTaskList]: state => (
    { ...state, mode: modes.addingTaskList }
  ),
  [cancelAddNewTaskList]: state => (
    {
      ...state,
      mode: modes.none,
      partial: getInitialState().partial,
    }
  ),
  [updatePartialTaskList]: (state, action) => (
    {
      ...state,
      partial: { ...state.partial, ...action.payload }
    }
  ),
  [createNewTaskListSuccess]: (state, action) => (
    {
      ...state,
      lists: [action.payload, ...state.lists],
      mode: modes.none,
      partial: getInitialState().partial,
    }
  ),
}, getInitialState());

export default { taskLists };
