import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from './Icon';

const IconButton = ({ onPress, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon {...props} />
  </TouchableOpacity>
);

IconButton.propTypes = {
  ...Icon.propTypes,
  onPress: PropTypes.func.isRequired,
};

export default IconButton;
