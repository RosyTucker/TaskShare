import { handleActions } from 'redux-actions';
import modes from './taskListModes';

import {
  addNewTaskList,
  cancelAddNewTaskList,
} from './taskListActions';

const getInitialState = () => ({
  taskLists: [],
  mode: modes.none,
});

const taskLists = handleActions({
  [addNewTaskList]: state => (
    { ...state, mode: modes.addingTask }
  ),
  [cancelAddNewTaskList]: state => (
    { ...state, mode: modes.none }
  ),
}, getInitialState());

export default { taskLists };