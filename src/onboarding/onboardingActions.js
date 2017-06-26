import { createAction } from 'redux-actions';

export const UPDATE_REGISTRATION_DETAILS = 'UPDATE_REGISTRATION_DETAILS';
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const updateRegistrationDetails = createAction(UPDATE_REGISTRATION_DETAILS);

export const register = createAction(REGISTER);
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerError = createAction(REGISTER_ERROR);
