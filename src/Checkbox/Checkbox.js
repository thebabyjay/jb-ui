import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core';
import s from './Checkbox.scss';
import Icon from '../Icon';
import Typography from '../Typography';

const Checkbox = ({ label, labelVariant = 'n1', disabled, checked, onChange }) => {
  const handleChange = event => {
    onChange(event.target.checked);
  };
  
  return (
    <div className={s.checkbox} onClick={handleChange}>
      <div className={classnames(s.checkbox__box, (disabled) ? s.checkbox__disabled : s.checkbox__enabled, (checked) ? s.checkbox__checked : s.checkbox__unchecked)}>
        {
          checked && <Icon name='checkmark' classes={[s.checkbox__checkmark]} />
        }
      </div>
      { label && <div className={s.checkbox__labelContainer}>
        {
          (typeof label === 'function') ? label() : <Typography variant={labelVariant} className={s.checkbox__label}>{label}</Typography>
        }
          
        </div>}
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
