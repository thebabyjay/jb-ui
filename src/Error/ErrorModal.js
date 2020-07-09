import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ErrorMessage from './ErrorMessage';
import styles from './Error.styles';
const useStyles = makeStyles(styles);

const ErrorModal = ({ error }) => {
  const classes = useStyles();
  return (
    <Dialog open>
      <DialogContent>
        <ErrorMessage error={error} />
      </DialogContent>
    </Dialog>
  );
};
ErrorModal.defaultProps = {};
ErrorModal.propTypes = {
  error: PropTypes.any,
};

export default ErrorModal;
