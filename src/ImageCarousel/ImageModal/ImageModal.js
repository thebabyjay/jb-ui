import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/styles';
import styles from './ImageModal.styles';

const useStyles = makeStyles(styles);

const ImageModal = ({ image, open, onClose }) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      maxWidth="lg"
      onClose={onClose}
      aria-labelledby="image-modal-title"
      className={classes.imageModal}
      autoScrollBodyContent={false}
      contentStyle={{ width: '100%', maxWidth: 'none' }}
    >
      <DialogContent>
        <img style={{ width: '100%' }} {...image} alt="Missing" />
      </DialogContent>
    </Dialog>
  );
};
ImageModal.defaultProps = {};
ImageModal.propTypes = {
  image: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ImageModal;
