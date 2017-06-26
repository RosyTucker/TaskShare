import variable from '../variables/platform';

export default (variables = variable) => {
  const h1Theme = {
    backgroundColor: 'transparent',
    color: variables.textColor,
    fontSize: variables.fontSizeH1,
    lineHeight: variables.lineHeightH1,
    '.light': {
      color: '#f4f4f4',
    },
  };

  return h1Theme;
};
