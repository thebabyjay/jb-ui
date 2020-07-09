import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import s from './TextField.scss';
import classnames from 'classnames';

const TextField = ({ label, value = '', onChange = () => null, iconLeft = false, iconRight = false, disabled = false, required=false, autocomplete = "off", type, onBlur = () => null }) => {
  const [currentValue, setValue] = useState(value);
  const [showRequiredAlert, setShowRequiredAlert] = useState(false);
  const handleChange = e => {
    const val = e.target.value;
    if(val && showRequiredAlert){
      setShowRequiredAlert(false);
    }
    setValue(val);
    onChange(val);
  };
  const handleBlur = e => {
    if(required && !currentValue){
      setShowRequiredAlert(true);
    } else {
      setShowRequiredAlert(false);
    }
    onBlur(currentValue);
  };
  const IconRight = () => {
    if (typeof iconRight === 'array') {
      return (
        <div className={s.textField__iconRightContainer}>
          {iconRight.map(icon => (
            <Icon name={icon} classes={[s.textField__icon]} />
          ))}
        </div>
      );
    }
    if (typeof iconRight === 'string') {
      return (
        <div className={s.textField__iconRightContainer}>
          <Icon name={iconRight} classes={[s.textField__icon]} />
        </div>
      );
    }
    return null;
  };
  return (
    <div className={s.textField}>
      <div className={s.textField__labelContainer}>
        <span className={s.textField__label}>{label}</span>
        { required && <span className={classnames(s.textField__required, showRequiredAlert ? s.textField__alert : null)}>*required</span> }
      </div>
      <div className={s.textField__inputContainer}>
        {iconLeft && typeof iconLeft === 'string' && <Icon name={iconLeft} classes={[s.textField__icon]} />}
        <input className={s.textField__input} type={type ? type : "text"} value={currentValue} onChange={handleChange} onBlur={handleBlur} disabled={disabled} required={required} autocomplete={autocomplete}/>
        {<IconRight />}
      </div>
    </div>
  );
};
TextField.defaultProps = {};
TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default TextField;
