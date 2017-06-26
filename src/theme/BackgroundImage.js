import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';

const style = {
  backgroundImage: {
    flex: 1,
    margin: 0,
    padding: 0,
    borderWidth: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
};

const BackgroundImage = props => (
  <View style={style.backgroundImage}>
    <Image
      resizeMode="cover"
      style={style.backgroundImage}
      source={props.source}
      blurRadius={props.blurRadius}
    />
  </View>
);

BackgroundImage.propTypes = {
  source: PropTypes.number.isRequired,
  blurRadius: PropTypes.number.isRequired,
};

export default BackgroundImage;
