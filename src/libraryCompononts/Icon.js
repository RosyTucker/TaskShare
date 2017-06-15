import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { colors, sizes } from '../style';

const Icon = ({ config, style, size, color }) => {
  const computedStyle = {
    color: colors.text[color],
    backgroundColor: colors.transparent,
    fontSize: sizes[size],
  };
  const IconComponent = config.component;

  return (
    <IconComponent style={[computedStyle, style]} name={config.id} />
  );
};

Icon.defaultProps = {
  size: 'medium',
  style: {},
  color: 'default',
};

Icon.propTypes = {
  config: PropTypes.shape({
    component: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(colors.text)),
  style: View.propTypes.style,
};

export default Icon;
