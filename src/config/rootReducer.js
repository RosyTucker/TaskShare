import { combineReducers } from 'redux';
import navigationReducers from '../nav/navigationReducers';
import taskListReducers from '../tasks/taskListReducers';
import onboardingReducers from '../onboarding/onboardingReducers';
import userReducers from '../user/userReducers';

const reducers = combineReducers({
  ...navigationReducers,
  ...taskListReducers,
  ...onboardingReducers,
  ...userReducers,
});

export default reducers;
