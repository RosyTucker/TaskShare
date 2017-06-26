import { takeEvery, put, select, call } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { getRegistrationDetails } from './onboardingSelectors';
import endpoints from '../config/endpoints';
import routes from '../nav/routes';

import {
  REGISTER,
  registerSuccess,
  registerError,
} from './onboardingActions';

function statusHelper(status, body) {
  return (status >= 200 && status < 400)
    ? Promise.resolve(body)
    : Promise.reject(body);
}

const register = (details) => {
  let status;
  return fetch(endpoints.registrations, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
  }).then((response) => {
    status = response.status;
    return response.json();
  }).then(body => statusHelper(status, body));
};

function* handleRegister() {
  const registrationDetails = yield select(getRegistrationDetails);

  try {
    const result = yield call(register, registrationDetails);
    yield put(registerSuccess(result));
    yield put(NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routes.home })],
      key: null,
    }));
  } catch (e) {
    yield put(registerError(e));
  }
}

export function* watchRegister() {
  yield takeEvery(REGISTER, handleRegister);
}

export default [
  watchRegister,
];
