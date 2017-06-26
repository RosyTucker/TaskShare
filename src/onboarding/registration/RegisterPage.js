import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import {
  colors,
  Container,
  BackgroundImage,
  transparentHeaderStyle,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
} from '../../theme/index';

import strings from '../../strings/index';

const backgroundImage = require('../../../images/landing.png');


const styles = {
  registerButton: {
    marginTop: 20,
  },
  content: {
    padding: 20,
  },
  form: {
    justifyContent: 'center',
  },
  item: {
    marginBottom: 20,
    borderBottomColor: colors.inputBorderColorLight,
  },
  input: {},
};

class RegisterPage extends Component {
  static navigationOptions = () => ({
    headerStyle: transparentHeaderStyle,
    title: strings.register.navBarTitle,
  });

  render() {
    const { height } = Dimensions.get('window');

    const { registrationDetails, onUpdateRegistrationDetails, onRegister } = this.props;
    return (
      <Container>
        <BackgroundImage source={backgroundImage} blurRadius={20} />
        <Content style={styles.content}>
          <Form style={{ ...styles.form, height }}>
            <Item style={styles.item}>
              <Input
                light
                autoCapitalize="words"
                style={styles.input}
                value={registrationDetails.name}
                onChangeText={name => onUpdateRegistrationDetails({ name })}
                placeholder={strings.register.nameInputPlaceholder}
                placeholderTextColor={colors.inputColorPlaceholderLight}
              />
            </Item>
            <Item style={styles.item}>
              <Input
                light
                autoCapitalize="none"
                keyboardType="email-address"
                value={registrationDetails.email}
                onChangeText={email => onUpdateRegistrationDetails({ email })}
                placeholder={strings.register.emailInputPlaceholder}
                placeholderTextColor={colors.inputColorPlaceholderLight}
              />
            </Item>
            <Item style={styles.item}>
              <Input
                style={styles.input}
                light
                secureTextEntry
                value={registrationDetails.password}
                onChangeText={password => onUpdateRegistrationDetails({ password })}
                placeholder={strings.register.passwordInputPlaceholder}
                placeholderTextColor={colors.inputColorPlaceholderLight}
              />
            </Item>
            <Button full light bordered style={styles.registerButton} onPress={onRegister}>
              <Text>{strings.register.registerButtonTitle}</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

RegisterPage.propTypes = {
  onUpdateRegistrationDetails: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  registrationDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default RegisterPage;
