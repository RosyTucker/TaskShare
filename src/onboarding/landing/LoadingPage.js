import React from 'react';
import { Container, BackgroundImage } from '../../theme/index';

const backgroundImage = require('../../../images/landing.png');

const LoadingPage = () => (
  <Container><BackgroundImage source={backgroundImage} blurRadius={20} /></Container>
);

LoadingPage.navigationOptions = {
  header: null,
};

export default LoadingPage;

