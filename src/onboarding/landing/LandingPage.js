import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Grid, Row, Col, Text, BackgroundImage, H1 } from '../../theme/index';

import strings from '../../strings/index';

const backgroundImage = require('../../../images/landing.png');

const styles = {
  bottomButton: {
    marginTop: 5,
  },
  topButton: {
    marginBottom: 5,
  },
  grid: {
    flex: 1,
    padding: 20,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class LandingPage extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    const {
      onSelectLogin,
      onSelectRegister,
    } = this.props;

    return (
      <Container>
        <BackgroundImage source={backgroundImage} blurRadius={20} />
        <Grid style={styles.grid}>
          <Row size={10} style={styles.info}>
            <H1 light>{strings.landing.title}</H1>
          </Row>
          <Row size={2}>
            <Col>
              <Button full onPress={onSelectRegister} bordered light style={styles.topButton}>
                <Text>{strings.landing.registerButtonTitle}</Text>
              </Button>
              <Button full onPress={onSelectLogin} bordered light style={styles.bottomButton}>
                <Text>{strings.landing.loginButtonTitle}</Text>
              </Button>
            </Col>
          </Row>
          <Row size={1} />
        </Grid>
      </Container>
    );
  }
}

LandingPage.propTypes = {
  onSelectLogin: PropTypes.func.isRequired,
  onSelectRegister: PropTypes.func.isRequired,
};

export default LandingPage;
