import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from './style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightBackground,
  },
});

const Login = () => (
  <View style={styles.container}>
    <Text>
      Hello World
    </Text>
  </View>
);

export default Login;

