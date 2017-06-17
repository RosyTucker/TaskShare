import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  Dimensions,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';


const getContainerHeight = (withScroll, withNavBar) => {
  if (withScroll) return undefined;

  const navHeight = 64;
  return Dimensions.get('window').height - (withNavBar ? navHeight : 0);
};

const getResetScrollPosition = (withScroll) => {
  if (withScroll) return undefined;

  return { x: 0, y: 0 };
};

const KeyboardController = ({ contentStyle, withNavBar, withTabBar, children, withScroll }) => {
  const contentContainerStyles = [
    { height: getContainerHeight(withScroll, withNavBar) },
    contentStyle,
  ];

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView
        contentContainerStyle={contentContainerStyles}
        resetScrollToCoords={getResetScrollPosition(withScroll)}
        extraHeight={125}
        viewIsInsideTabBar={withTabBar}
        scrollEnabled={withScroll}
      >
        {children}
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

KeyboardController.defaultProps = {
  withTabBar: false,
  withNavBar: false,
  withScroll: false,
  contentStyle: {},
};

KeyboardController.propTypes = {
  withTabBar: PropTypes.bool,
  withNavBar: PropTypes.bool,
  withScroll: PropTypes.bool,
  contentStyle: View.propTypes.style,
  children: PropTypes.node.isRequired,
};

export default KeyboardController;
