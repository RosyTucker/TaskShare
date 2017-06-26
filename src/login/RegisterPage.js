import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Text } from '../theme/index';

class RegisterPage extends Component {
  static navigationOptions = () => ({
  });

  render() {
    return (
      <Container>
        <Content>
          <Text> Register </Text>
        </Content>
      </Container>
    );
  }
}

RegisterPage.propTypes = {};

export default RegisterPage;
