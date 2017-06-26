import React, { Component } from 'react';

import { Container, BackgroundImage, transparentHeaderStyle } from '../theme/index';

const backgroundImage = require('../../images/landing.png');

class LoginPage extends Component {
  static navigationOptions = () => ({
    headerStyle: transparentHeaderStyle,
  });

  render() {
    return (
      <Container>
        <BackgroundImage source={backgroundImage} blurRadius={20} />
      </Container>
    );
  }
}

LoginPage.propTypes = {};

export default LoginPage;
