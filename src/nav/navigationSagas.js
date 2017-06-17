import { put, takeEvery } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { REHYDRATE } from 'redux-persist/constants';
import routes from './routes';

function* finishedLoading() {
  yield put(
    NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routes.home })],
      key: null,
    }),
  );
}

export function* watchRehydrate() {
  yield takeEvery(REHYDRATE, finishedLoading);
}

export default [watchRehydrate];
