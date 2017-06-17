import React from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import getTheme from './theme/native-base-theme/components';
import commonColor from './theme/native-base-theme/variables/commonColor';
import platform from './theme/native-base-theme/variables/platform';
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

export default App;
