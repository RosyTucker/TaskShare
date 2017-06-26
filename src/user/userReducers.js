import { handleActions } from 'redux-actions';

import {
  registerSuccess,
} from '../onboarding/onboardingActions';

const getInitialUserState = () => ({
  token: '',
  id: null,
});

const user = handleActions({
  [registerSuccess]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
}, getInitialUserState());

export default { user };
