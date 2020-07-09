import React, { useState, useRef, useEffect } from 'react';
import useDimensions from 'react-use-dimensions';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LinearProgress from '@material-ui/core/LinearProgress';
import uuid from 'uuid';
import Menu from '../Menu';
import Icon from '../Icon';
import s from './RemoteAutoComplete.scss';

const RemoteAutoComplete = ({
  key,
  label = '',
  value = '',
  options = [],
  onChange = () => null,
  onBlur = () => null,
  onFetch = () => null,
  optionValueKey = 'value',
  optionLabel = null,
  optionLabelKey = 'label',
  showNoneOption = true,
  showLabel = true,
  children,
  loading = false,
}) => {
  const [open, setOpen] = useState(loading);
  const [currentValue, setValue] = useState(value);
  const [ref, { width, x, y }] = useDimensions();
  const inputRef = useRef(null);

  const _options = typeof options === 'object' && options.results ? options.results : options;

  useEffect(() => {
    if (loading) {
      focusInput();
    }
  }, []);
  const handleChange = val => {
    setValue(val);
    setOpen(false);
    onChange(val);
  };
  const handleBlur = () => {
    setOpen(false);
    onChange(currentValue);
    onBlur(currentValue);
  };
  const handleTextInput = val => {
    setValue(val);
    onFetch(val);
  };

  const handleClick = () => {
    if (!open) {
      focusInput();
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  const renderValue = () => {
    if (!currentValue) {
      return '';
    }
    if (optionLabel) {
      const obj = _options.find(option => option[optionValueKey] === currentValue);
      if (obj) {
        return optionLabel(obj);
      }
      return currentValue;
    }
    return currentValue;
  };

  const renderOptions = () => {
    if (!_options.length) {
      return [];
    }
    if (optionLabel && typeof optionLabel === 'function') {
      return _options.map(option => ({
        label: optionLabel(option),
        value: option[optionValueKey],
        selected: currentValue === option[optionValueKey],
      }));
    }
    return _options.map(option => ({
      label: option[optionLabelKey],
      value: option[optionValueKey],
      selected: currentValue === option[optionValueKey],
    }));
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div style={{ position: 'relative' }} key={key}>
        <div ref={ref} className={s.remoteAutoComplete}>
          {showLabel && label && (
            <div className={s.remoteAutoComplete__labelContainer}>
              <span className={s.remoteAutoComplete__label}>{label || children}</span>
            </div>
          )}
          <div className={s.remoteAutoComplete__inputContainer} onClick={handleClick}>
            <input
              key={`${key}_remoteAutoComplete_input`}
              ref={inputRef}
              className={s.remoteAutoComplete__input}
              type="text"
              value={renderValue()}
              onClick={() => setOpen(!open)}
              onBlur={handleBlur}
              onChange={e => handleTextInput(e.target.value)}
              autoComplete={uuid.v1()}
            />
            <Icon name="caret-down" classes={[s.remoteAutoComplete__icon]} />
          </div>
        </div>
        {loading && (
          <LinearProgress
            style={{ position: 'relative', top: -3, height: '3px' }}
            color="secondary"
          />
        )}
        {open && (
          <div
            className={s.remoteAutoComplete__menuContainer}
            style={{ left: -4, top: showLabel && label ? 65 : 45 }}
          >
            <Menu
              loading={loading}
              open={open}
              options={renderOptions()}
              onChange={handleChange}
              width={width + 2}
              showNoneOption={showNoneOption}
            />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

RemoteAutoComplete.defaultProps = {};
RemoteAutoComplete.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array,
  optionValueKey: PropTypes.string,
  optionLabelKey: PropTypes.string,
  showNoneOption: PropTypes.bool,
  children: PropTypes.any,
};

export default RemoteAutoComplete;
