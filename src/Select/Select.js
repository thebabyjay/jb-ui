import React, { useState, useEffect, useRef } from 'react';
import useDimensions from 'react-use-dimensions';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import classnames from 'classnames';
import uuid from 'uuid';
import Menu from '../Menu';
import Icon from '../Icon';
import s from './Select.scss';

const Select = ({
  label = '',
  value = '',
  values = [],
  options = [],
  onChange = () => null,
  optionValueKey = 'value',
  optionLabel = null,
  optionLabelKey = 'label',
  showLabel = true,
  children,
  multiple = false,
  required = false,
  classes = [],
  className = false,
  placeholder = '',
  disabled = false,
}) => {
  const [currentValues, setValues] = useState(values.length ? values : [value]);
  const [open, setOpen] = useState(false);
  const [showRequiredAlert, setShowRequiredAlert] = useState(false);
  const [ref, { width, x, y }] = useDimensions();
  const inputRef = useRef(null);

  // The useEffect allows the component to be controlled or uncontrolled
  useEffect(() => {
    setValues(values.length ? values : [value]);
  }, [values.length, value]);

  const _options = typeof options === 'object' && options.results ? options.results : options;

  const hasValue = () =>
    currentValues && currentValues.length && currentValues.some(val => Boolean(val));

  const handleChange = val => {
    setValues([val]);
    setOpen(false);
    onChange(val);
    if (required) {
      setShowRequiredAlert(!val);
    }
  };

  const handleMultipleChange = val => {
    let newValues = [...currentValues];
    if (newValues.includes(val)) {
      const index = newValues.indexOf(val);
      newValues.splice(index, 1);
    } else {
      newValues.push(val);
    }
    newValues = newValues.filter(v => v !== '');
    setValues(newValues);
    setOpen(false);
    onChange(newValues);
  };

  const handleClick = () => {
    if (!disabled) {
      if (!open) {
        focusInput();
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  const renderValue = () => {
    if (currentValues.length === 0) {
      return '';
    }
    const options = _options.filter(opt => currentValues.includes(opt[optionValueKey]));
    if (options.length > 0) {
      if (optionLabel && typeof optionLabel === 'function') {
        return options.map(opt => optionLabel(opt)).join(', ');
      }
      return options.map(opt => opt[optionLabelKey]).join(', ');
    }
    return '';
  };

  const renderOptions = () => {
    // JMP: The Menu handles null
    // if (!_options.length) {
    //   return [
    //     {
    //       label: 'No Options Available',
    //       value: null,
    //     },
    //   ];
    // }
    if (optionLabel && typeof optionLabel === 'function') {
      return _options.map(option => ({
        label: optionLabel(option),
        value: option[optionValueKey],
        selected: Boolean(currentValues.includes(option[optionValueKey])),
      }));
    }
    return _options.map(option => ({
      label: option[optionLabelKey],
      value: option[optionValueKey],
      selected: Boolean(currentValues.includes(option[optionValueKey])),
    }));
  };

  let classNames = [];
  if (className) {
    classNames.push(className);
  }
  if (classes.length) {
    classNames = classNames.concat(classes);
  }
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div style={{ position: 'relative' }} className={classnames(classNames)}>
        <div ref={ref} className={s.select}>
          {showLabel && label && (
            <div className={s.select__labelContainer}>
              <span className={s.select__label}>{label || children}</span>
              {required && (
                <span
                  className={classnames(
                    s.select__required,
                    showRequiredAlert ? s.select__alert : null,
                  )}
                >
                  *required
                </span>
              )}
            </div>
          )}
          <div
            className={classnames(s.select__inputContainer, disabled && s.select__disabled)}
            onClick={handleClick}
          >
            <input
              ref={inputRef}
              className={classnames(s.select__input, disabled && s.select__disabled)}
              type="text"
              value={renderValue()}
              onClick={() => {
                if (!disabled) {
                  setOpen(!open);
                }
              }}
              autoComplete={uuid.v1()}
              disabled
              placeholder={placeholder}
            />
            <Icon name="caret-down" classes={[s.select__icon]} />
          </div>
        </div>
        {open && (
          <div className={s.select__menuContainer} style={{ top: showLabel && label ? 64 : 44 }}>
            <Menu
              open={open}
              options={renderOptions()}
              onChange={multiple ? handleMultipleChange : handleChange}
              width={width}
            />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

Select.defaultProps = {};
Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  values: PropTypes.array,
  onChange: PropTypes.func,
  options: PropTypes.array,
  optionValueKey: PropTypes.string,
  optionLabelKey: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  classes: PropTypes.array,
};

export default Select;
