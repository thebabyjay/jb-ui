import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  errorMessage: {
    color: theme.palette.error.dark,
  },
}));

const ErrorMessage = ({ error, message }) => {
  const classes = useStyles();
  const getMessage = () => {
    if (error instanceof Error) {
      if(typeof error.message === 'object'){
        return Object.values(error.message).join(', ');
      }
      return error.message;
    }
    return message;
  };
  return <Typography className={classes.errorMessage}>{getMessage()}</Typography>;
};
ErrorMessage.defaultProps = {};
ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
