import React from 'react';
import { Provider } from 'react-redux';

import sagaRoot from './config/rootSaga';
import { configureStore } from './config/store';

import AppWithNav from './nav/Navigator';

const store = configureStore();
store.runSaga(sagaRoot);

const App = () => (
  <Provider store={store}>
    <AppWithNav />
  </Provider>
);

export default App;