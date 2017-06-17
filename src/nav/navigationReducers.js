import { AppNavigator } from './Navigator';

import routes from './routes';

const initialState = AppNavigator.router
  .getStateForAction(AppNavigator.router.getActionForPathAndParams(routes.loadingPage));

const nav = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default { nav };
