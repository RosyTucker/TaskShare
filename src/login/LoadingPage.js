import React from 'react';
import { Container, Content, colors } from '../theme';

const styles = {
  content: {
    backgroundColor: colors.brandPrimary,
  },
};

const LoadingPage = () => (
  <Container><Content style={styles.content} /></Container>
);

LoadingPage.navigationOptions = {
  header: null,
};


export default LoadingPage;

