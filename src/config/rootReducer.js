import { combineReducers } from 'redux';
import navigationReducers from '../nav/navigationReducers';

const reducers = combineReducers({
  ...navigationReducers,
});

export default reducers;