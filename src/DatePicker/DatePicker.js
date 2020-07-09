import React, { useState, useEffect, useRef } from 'react';
import DayPicker from 'react-day-picker';
import PropTypes from 'prop-types';
import {
  Paper,
  Popper,
  InputAdornment,
  Input,
  FormHelperText,
  FormControl,
  IconButton,
  InputLabel,
  ClickAwayListener,
} from '@material-ui/core';
import { format } from 'date-fns';
import { IoMdCalendar as CalendarIcon } from 'react-icons/io';
import 'react-day-picker/lib/style.css';
import './datePicker.css';

import useDimensions from 'react-use-dimensions';
import classnames from 'classnames';
import Menu from '../Menu';
import Icon from '../Icon';

import s from './DatePicker.scss';

const DatePicker = ({
  label = '',
  value = '',
  onChange = () => null,
  optionValueKey = 'value',
  optionLabel = null,
  optionLabelKey = 'label',
  showLabel = true,
  children,
  required = false,
}) => {
  const [currentValue, setValue] = useState(value);
  const [open, setOpen] = useState(false);
  const [showRequiredAlert, setShowRequiredAlert] = useState();
  const [ref, { width, x, y }] = useDimensions();
  const inputRef = useRef(null);

  const handleChange = val => {
    if(val) {
      const date = new Date(val);
      const dateString = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
      onChange(dateString);
    }
    const date = new Date(val);
    setOpen(false);
    if(required){
      setShowRequiredAlert(!Boolean(val))
    }
  };
  
  const focusInput = () => {
    inputRef.current.focus();
  }
  const formatValue = value => {
    if (!value) {
      return null;
    }
    const d = new Date(value);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  }
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div style={{ position: 'relative'}}>
        <div ref={ref} className={s.datePicker} >
          {showLabel && label && (
            <div className={s.datePicker__labelContainer}>
              <span className={s.datePicker__label}>{label || children}</span>
              { required && <span className={classnames(s.datePicker__required, showRequiredAlert ? s.datePicker__alert : null)}>*required</span> }
            </div>
          )}
          <div className={s.datePicker__inputContainer}>
            <input
              ref={inputRef}
              className={s.datePicker__input}
              type="text"
              value={formatValue(value)}
              onClick={() => setOpen(!open)}
            />
            {<CalendarIcon name="caret-down" className={s.datePicker__icon} onClick={() => {
              if(!open){
                focusInput();
                setOpen(!open);
              } else {
                setOpen(false);
              }
            }} />}
          </div>
        </div>
        {
          open && <div className={s.datePicker__menuContainer} style={{ right: 5, top: (showLabel && label) ? 66 : 44 }}>
          <DayPicker onDayClick={handleChange}/>
        </div>
        }
      </div>
    </ClickAwayListener>
  );
};
DatePicker.defaultProps = {};
DatePicker.propTypes = {
  id: PropTypes.string,

  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  optionValueKey: PropTypes.string,
  optionLabelKey: PropTypes.string,
  showNoneOption: PropTypes.bool,
  children: PropTypes.any,
};

export default DatePicker;
