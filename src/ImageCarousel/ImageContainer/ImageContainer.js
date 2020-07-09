/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import styles from './ImageContainer.styles';
const useStyles = makeStyles(styles);

const ImageContainer = ({ image, onClick }) => {
  const classes = useStyles();
  return (
    <div
      onClick={onClick}
      className={classes.imageContainer}
      style={{
        display: 'inline-block',
        width: 150,
        height: 80,
        background: `url(${image.src})`,
        backgroundSize: 'cover',
        margin: 10,
      }}
    />
  );
};
ImageContainer.propTypes = {
  image: PropTypes.object,
  onClick: PropTypes.func,
};

export default ImageContainer;
