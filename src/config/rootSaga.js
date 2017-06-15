import { fork } from 'redux-saga/effects';
import navigationSagas from '../nav/navigationSagas';

export default function* sagas() {
  yield [
    navigationSagas.map(saga => fork(saga)),
  ];
}
