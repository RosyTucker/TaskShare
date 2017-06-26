import { connect } from 'react-redux';

import { updateRegistrationDetails, register } from '../onboardingActions';
import { getRegistrationDetails } from '../onboardingSelectors';

import RegisterPage from './RegisterPage';

const mapStateToProps = state => ({
  registrationDetails: getRegistrationDetails(state),
});

const mapDispatchToProps = dispatch => ({
  onUpdateRegistrationDetails: update => dispatch(updateRegistrationDetails(update)),
  onRegister: () => dispatch(register()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
