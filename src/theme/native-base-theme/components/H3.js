import variable from '../variables/platform';

export default (variables = variable) => {
  const h3Theme = {
    backgroundColor: 'transparent',
    color: variables.textColor,
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH3,
    '.light': {
      color: '#f4f4f4',
    },
  };

  return h3Theme;
};
