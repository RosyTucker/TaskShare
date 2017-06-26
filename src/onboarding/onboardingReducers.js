import { handleActions } from 'redux-actions';

import {
  updateRegistrationDetails,
  registerSuccess,
  registerError,
  register,
} from './onboardingActions';

import onboardingModes from './onboardingModes';

const getInitialState = () => ({
  details: {
    name: '',
    email: '',
    password: '',
  },
  mode: onboardingModes.none,
});

const registration = handleActions({
  [updateRegistrationDetails]: (state, action) => ({
    ...state,
    details: {
      ...state.details,
      ...action.payload,
      mode: onboardingModes.none,
    },
  }),
  [register]: state => ({
    ...state,
    mode: onboardingModes.registering,
  }),
  [registerSuccess]: state => ({
    ...state,
    mode: onboardingModes.none,
  }),
  [registerError]: state => ({
    ...state,
    mode: onboardingModes.registrationError,
  }),
}, getInitialState());

export default { registration };
