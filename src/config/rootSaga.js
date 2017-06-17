import { fork, all } from 'redux-saga/effects';
import navigationSagas from '../nav/navigationSagas';
import tasklistSagas from '../home/taskListSagas';

export default function* sagas() {
  yield all([
    navigationSagas.map(saga => fork(saga)),
  ]);
}
