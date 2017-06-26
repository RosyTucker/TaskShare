import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Text } from '../theme/index';

class LoginPage extends Component {
  static navigationOptions = () => ({
  });

  render() {
    return (
      <Container>
        <Content>
          <Text> Login </Text>
        </Content>
      </Container>
    );
  }
}

LoginPage.propTypes = {};

export default LoginPage;
