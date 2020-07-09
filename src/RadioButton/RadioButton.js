import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import styles from './RadioButton.styles';
const useStyles = makeStyles(styles);

const RadioButton = ({ prop }) => {
  const classes = useStyles();
  return <span className={classes.camelCase}>{prop}</span>;
};
RadioButton.defaultProps = {};
RadioButton.propTypes = {
  prop: PropTypes.string,
};

export default RadioButton;
