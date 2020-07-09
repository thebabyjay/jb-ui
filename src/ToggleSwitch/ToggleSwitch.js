import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import s from './ToggleSwitch.scss';
import Icon from '../Icon';

const ToggleSwitch = ({ label, on = false, onChange }) => (
  <div className={s.toggleSwitchContainer}>
    <div
      className={classnames(s.toggleSwitch, on ? s.toggleSwitch__active : null)}
      onClick={() => onChange(!on)}
    >
      {on && (
        <div className={s.toggleSwitch__checkmarkContainer}>
          <Icon name="checkmark" classes={[s.toggleSwitch__checkmarkIcon]} />
        </div>
      )}
      <div className={s.toggleSwitch__toggle}></div>
    </div>
    {label && (
      <div className={s.toggleSwitch__labelContainer}>
        <span className={s.toggleSwitch__label}>{label}</span>
      </div>
    )}
  </div>
);
ToggleSwitch.propTypes = {
  label: PropTypes.string,
  on: PropTypes.bool,
};

export default ToggleSwitch;
