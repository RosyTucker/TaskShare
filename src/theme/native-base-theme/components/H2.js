import variable from '../variables/platform';

export default (variables = variable) => {
  const h2Theme = {
    backgroundColor: 'transparent',
    color: variables.textColor,
    fontSize: variables.fontSizeH2,
    lineHeight: variables.lineHeightH2,
    '.light': {
      color: '#f4f4f4',
    },
  };

  return h2Theme;
};
