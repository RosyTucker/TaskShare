import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { IconButton } from '../libraryCompononts/index';

import { colors, icons } from '../style/index';

const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingTop: 12,
    backgroundColor: colors.primary,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    flex: 2,
    color: colors.text.light,
    textAlign: 'center',
  },
  right: {
    flex: 1,
    marginRight: 16,
  },
});

const NavBar = ({ title, onBack }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.left}>
        <IconButton
          onPress={onBack}
          config={icons.close}
          size="large"
          color="light"
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.right}/>
    </View>
  </View>
);

NavBar.defaultProps = {
  title: '',
};

NavBar.propTypes = {
  onBack: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default NavBar;
