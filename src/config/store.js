import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage, Platform } from 'react-native';
import { autoRehydrate, persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const persistenceConfig = {
  storage: AsyncStorage,
};

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
      ),
      autoRehydrate(),
      devTools({
        name: Platform.OS,
        hostname: 'localhost',
        port: 5656,
      }),
    ));

  store.runSaga = sagaMiddleware.run;
  persistStore(store, persistenceConfig);
  return store;
};

export {
  configureStore,
};