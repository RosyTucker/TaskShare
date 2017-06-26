import { connect } from 'react-redux';

import LandingPage from './LandingPage';
import routes from '../nav/routes';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch, props) => ({
  onSelectLogin: () => props.navigation.navigate(routes.login),
  onSelectRegister: () => props.navigation.navigate(routes.register),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
