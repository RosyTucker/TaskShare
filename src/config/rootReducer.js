import { combineReducers } from 'redux';
import navigationReducers from '../nav/navigationReducers';
import taskListReducers from '../home/taskListReducers';

const reducers = combineReducers({
  ...navigationReducers,
  ...taskListReducers,
});

export default reducers;