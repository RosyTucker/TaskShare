import React from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import getTheme from './theme/native-base-theme/components';
import commonColor from './theme/native-base-theme/variables/commonColor';
import sagaRoot from './config/rootSaga';
import { configureStore } from './config/store';

import AppWithNav from './nav/Navigator';

const store = configureStore();
store.runSaga(sagaRoot);

const App = () => (
  <Provider store={store}>
    <StyleProvider style={getTheme(commonColor)}>
      <AppWithNav />
    </StyleProvider>
  </Provider>
);


/* eslint-disable no-underscore-dangle */
global._fetch = fetch;
global.fetch = (uri, options, ...args) => global._fetch(
  uri, options, ...args)
  .then((response) => {
    if (response.status === 200) return response;
    console.log('Fetching from', uri, response.status, { request: { uri, options, ...args }, response });
    return response;
  });
/* eslint-enable */

export default App;
