import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { colors } from '../theme';

import TaskListsContainer from '../tasks/allLists/TaskListsContainer';
import TaskListContainer from '../tasks/list/TaskListContainer';
import LoadingPage from '../login/LoadingPage';
import LandingPageContainer from '../login/LandingPageContainer';
import LoginPageContainer from '../login/LoginPageContainer';
import RegisterPageContainer from '../login/RegisterPageContainer';

import routes from './routes';

const globalNavigationOptions = {
  headerMode: 'screen',
  navigationOptions: {
    headerTintColor: colors.toolbarTextColor,
    headerStyle: { backgroundColor: colors.brandPrimary, borderBottomWidth: 0 },
  },
};

export const AppNavigator = StackNavigator({
  [routes.loadingPage]: {
    screen: LoadingPage,
    navigationOptions: { header: null },
  },
  [routes.landing]: {
    screen: LandingPageContainer,
  },
  [routes.register]: {
    screen: RegisterPageContainer,
  },
  [routes.login]: {
    screen: LoginPageContainer,
  },
  [routes.home]: {
    screen: TaskListsContainer,
  },
  [routes.taskList]: {
    screen: TaskListContainer,
  },
}, globalNavigationOptions);


const AppWithNav = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      routeName: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNav);
