import { fork, all } from 'redux-saga/effects';
import navigationSagas from '../nav/navigationSagas';

export default function* sagas() {
  yield all([
    navigationSagas.map(saga => fork(saga)),
  ]);
}
