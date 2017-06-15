import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import HomeContainer from '../home/HomeContainer';
import LoadingPage from '../login/LoadingPage';

import { colors } from '../style/index';
import routes from './routes';

const globalNavigationOptions = {
  headerMode: 'screen',
  navigationOptions: {
    headerTintColor: colors.text.light,
    headerStyle: { backgroundColor: colors.primary, borderBottomWidth: 0 },
  },
};

export const AppNavigator = StackNavigator({
  [routes.loadingPage]: {
    screen: LoadingPage,
    navigationOptions: { header: null },
  },
  [routes.home]: {
    screen: HomeContainer,
  },
}, globalNavigationOptions);


const AppWithNav = ({ dispatch, nav }) => {
  return (
    <AppNavigator
      navigation={addNavigationHelpers({ dispatch, state: nav })}
    />
  );
};

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