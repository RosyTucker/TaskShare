import { fork, all } from 'redux-saga/effects';
import navigationSagas from '../nav/navigationSagas';
import tasklistSagas from '../tasks/taskListSagas';

export default function* sagas() {
  yield all([
    ...navigationSagas.map(saga => fork(saga)),
    ...tasklistSagas.map(saga => fork(saga)),
  ]);
}
