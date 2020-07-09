import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import styles from './Image.styles';
const useStyles = makeStyles(styles);

const Image = ({ src }) => {
  const classes = useStyles();
  return <img src={src} className={classes.image} />;
};
Image.defaultProps = {};
Image.propTypes = {
  src: PropTypes.string,
};

export default Image;
