import variable from '../variables/platform';

export default (variables = variable) => {
  const inputTheme = {
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    fontSize: variables.inputFontSize,
    lineHeight: variables.inputLineHeight,
    '.light': {
      color: '#FFF',
    },
  };

  return inputTheme;
};
