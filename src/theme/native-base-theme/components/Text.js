import variable from '../variables/platform';

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize - 1,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    '.note': {
      color: variables.noteFontColor,
      fontSize: variables.noteFontSize,
    },
  };

  return textTheme;
};
