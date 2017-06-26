import { put, takeEvery, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { REHYDRATE } from 'redux-persist/constants';

import { getUser } from '../user/userSelectors';
import routes from './routes';

function* finishedLoading() {
  const user = yield select(getUser);

  const routeName = user.token ? routes.home : routes.landing;

  yield put(
    NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
      key: null,
    }),
  );
}

export function* watchRehydrate() {
  yield takeEvery(REHYDRATE, finishedLoading);
}

export default [watchRehydrate];
