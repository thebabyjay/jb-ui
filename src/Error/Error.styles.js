const styles = theme => {
  console.log('theme', theme);
  return { // eslint-disable-line
    root: {
      flex: 1,
    },
    errorMessage: {
      color: theme.palette.error.dark,
    },
  };
};
export default styles;
