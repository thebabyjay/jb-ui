import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, FormControl, Select as MuiSelect, OutlinedInput, MenuItem } from '@material-ui/core';
import styles from './Select.styles';
const useStyles = makeStyles(styles);

const Select = ({
  label = '',
  value = '',
  options = [],
  onChange = () => null,
  optionValueKey,
  optionLabelKey,
  showNoneOption = true,
}) => {
  const classes = useStyles();
  const renderOption = (option, key) => {
    if (option instanceof Object) {
      return (
        <MenuItem key={option[optionValueKey]} value={option[optionValueKey]}>
          {option[optionLabelKey]}
        </MenuItem>
      );
    }
    return (
      <MenuItem key={`select_${key}_${option.replace(' ', '')}`} value={key}>
        {option}
      </MenuItem>
    );
  };
  return (
    <React.Fragment>
      <InputLabel className={classes.inputLabel}>{label}</InputLabel>
      <FormControl variant="outlined" fullWidth className={classes.formControl}>
        <MuiSelect
          value={value}
          onChange={e => onChange(e.target.value)}
          input={<OutlinedInput name={label.replace(' ', '')} id={label.replace(' ', '')} />}
        >
          {showNoneOption && (
            <MenuItem key={`select_${label.replace(' ', '')}`} value="">
              <em>None</em>
            </MenuItem>
          )}
          {options && options.length && options.map(renderOption)}
        </MuiSelect>
      </FormControl>
    </React.Fragment>
  );
};
Select.defaultProps = {};
Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array,
  onChange: PropTypes.func,
  optionValueKey: PropTypes.string,
  optionLabelKey: PropTypes.string,
  showNoneOption: PropTypes.bool,
};

export default Select;
