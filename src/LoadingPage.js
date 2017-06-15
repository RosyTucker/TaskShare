import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from './style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});

const LoadingPage = () => (
  <View style={styles.container} />
);

export default LoadingPage;

