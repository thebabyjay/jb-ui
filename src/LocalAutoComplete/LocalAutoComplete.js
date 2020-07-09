import React, { useState, useRef, useEffect } from 'react';
import useDimensions from 'react-use-dimensions';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LinearProgress from '@material-ui/core/LinearProgress';
import uuid from 'uuid';

import classnames from 'classnames';
import Menu from '../Menu';
import Icon from '../Icon';
import s from './LocalAutoComplete.scss';

const LocalAutoComplete = ({
  key,
  label = '',
  value = '',
  options = [],
  onChange = () => null,
  optionValueKey = 'value',
  optionLabelRenderer = null,
  optionLabelKey = 'label',
  showNoneOption = true,
  showLabel = true,
  children,
  loading = false,
  debug = false,
  required = false,
}) => {

  // Private 
  const _options = typeof options === 'object' && options.results ? options.results : options;
  
  // Helpers
  const getOptionForValue = value => value ? _options.find(o => o[optionValueKey] === value) : null

  // Hooks
  const [open, setOpen] = useState(loading);
  const [currentValue, setCurrentValue] = useState(getOptionForValue(value));
  const [filterValue, setFilterValue] = useState();
  const [showRequiredAlert, setShowRequiredAlert] = useState(false);
  const [ref, { width, x, y }] = useDimensions();
  const inputRef = useRef(null);

  useEffect(() => {
    if (loading) {
      focusInput();
    }
  }, []);

  useEffect(() => {
    setShowRequiredAlert(!Boolean(currentValue))
  }, [currentValue]);

  // Event Handlers 
  const handleChange = val => {
    if(debug) console.log('handleChange', val);
    if(val){
      setCurrentValue(getOptionForValue(val));
      setFilterValue(getOptionForValue(val)[optionLabelKey])
    } else {
      setCurrentValue(null);
      setFilterValue(null)
    }
    setOpen(false);
    onChange(val);
  };

  const handleBlur = () => {
    if(debug) console.log('handleBlur', currentValue, filterValue);
    setOpen(false);
    if(filterValue){
      // When the field blurs, if we have a filter value, try to set
      // the current value to whatever the filter value was if it matches
      // an object in the options array.
      const opts = _options.filter(option => option[optionLabelKey].indexOf(filterValue) >= 0)
      if(opts && opts.length) {
        setCurrentValue(opts[0]);
        onChange(opts[0][optionValueKey])
      }
    }
    setFilterValue(null);
  }

  const handleTextInput = val => {
    if(debug) console.log('handleTextInput');
    setFilterValue(val);
    setOpen(true);
  }

  const handleClick = () => {
    if(debug) console.log('handleClick');
    if (!open) {
      focusInput();
      setOpen(true);
    } else {
      setOpen(false);
      setFilterValue(null);
    }
  };

  const onKeyDown = e => {
    if(debug) console.log('onKeyDown', e.key);
    if (e.key === 'Enter' || e.key === 'Tab') {
      handleBlur();
    }
  };

  const focusInput = () => {
    if(debug) console.log('focusInput');
    inputRef.current.focus();
  };

  // Renderers
  const renderValue = () => {
    if(debug) console.log('renderValue', currentValue, filterValue);
    if(open) {
      // The select is open so return what we are filtering, if we are filtering
      if(filterValue){
        return filterValue;
      }
      return '';
    } else if(currentValue){
      // If not, return the label for the current value
      return currentValue[optionLabelKey];
    }
    return '';
  };

  const renderOptions = () => {
    if(debug) console.log('renderOptions', _options, currentValue, filterValue);
    if (!_options.length) {
      return [];
    }
    if (optionLabelRenderer && typeof optionLabelRenderer === 'function') {
      return _options
        .filter(opt => {
          const optLabel = optionLabelRenderer(opt).toLowerCase();
          return (!filterValue || optLabel.indexOf(filterValue.toLowerCase()) >= 0)
        })
        .map(option => ({
          label: optionLabelRenderer(option),
          value: option[optionValueKey],
          selected: currentValue === option[optionValueKey],
        }));
    }
    return _options
      .filter(opt => {
        const optLabel = opt[optionLabelKey].toLowerCase();
        return (!filterValue || optLabel.indexOf(filterValue.toLowerCase()) >= 0)
      })
      .map(option => ({
        label: option[optionLabelKey],
        value: option[optionValueKey],
        selected: currentValue === option[optionValueKey],
      }));
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div style={{ position: 'relative' }} key={key}>
        <div ref={ref} className={s.localAutoComplete}>
          {showLabel && label && (
            <div className={s.localAutoComplete__labelContainer}>
              <span className={s.localAutoComplete__label}>{label || children}</span>
              { required && <span className={classnames(s.localAutoComplete__required, showRequiredAlert ? s.localAutoComplete__alert : null)}>*required</span> }
            </div>
          )}
          <div className={s.localAutoComplete__inputContainer} onClick={handleClick}>
            <input
              key={`${key}_localAutoComplete_input`}
              ref={inputRef}
              className={s.localAutoComplete__input}
              type="text"
              value={renderValue()}
              onClick={() => setOpen(!open)}
              onBlur={handleBlur}
              onChange={(e) => handleTextInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete={uuid.v1()}
            />
            {<Icon name="caret-down" classes={[s.localAutoComplete__icon]} />}
          </div>
        </div>
        {
          loading && <LinearProgress style={{ position: 'relative', top: -3, height: '3px' }} color="secondary" />
        }
        {open && (
          <div
            className={s.localAutoComplete__menuContainer}
            style={{ left: -4, top: showLabel && label ? 65 : 45 }}
          >
            <Menu
              loading={loading}
              open={open}
              options={renderOptions()}
              onChange={handleChange}
              width={width + 2}
              showNoneOption={(filterValue) ? false : showNoneOption}
              noneOptionLabel={' '}
            />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

LocalAutoComplete.defaultProps = {};
LocalAutoComplete.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array,
  optionValueKey: PropTypes.string,
  optionLabelKey: PropTypes.string,
  optionLabelRenderer: PropTypes.func,
  showNoneOption: PropTypes.bool,
  children: PropTypes.any,
};

export default LocalAutoComplete;
