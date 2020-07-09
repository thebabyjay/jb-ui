import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import { TextField as MuiTextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/styles';
import styles from './Text.styles';
const useStyles = makeStyles(styles);

const Text = ({ label, value, inputLabelProps, inputProps, onChange, onKeydown }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <InputLabel {...inputLabelProps}>{label}</InputLabel>
      <FormControl variant="outlined" fullWidth className={classes.formControl}>
        <MuiTextField variant="outlined" value={value} onChange={onChange} {...inputProps} />
      </FormControl>
    </React.Fragment>
  );
};
Text.defaultProps = {};
Text.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  inputLabelProps: PropTypes.object,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
};

export default Text;
