import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Typography from '../Typography';

import s from './Button.scss';

const colors = {
  default: 'mc-ui-button-color-primary',
  action: 'mc-ui-button-color-action',
  active: 'mc-ui-button-color-active',
  pending: 'mc-ui-button-color-pending',
  alert: 'mc-ui-button-color-alert',
  programmable: 'mc-ui-button-color-programmable',
};
const types = {
  primary: 'mc-ui-button-type-primary',
  secondary: 'mc-ui-button-type-secondary',
  tertiary: 'mc-ui-button-type-tertiary',
};
const sizes = {
  xs: 'mc-ui-button-size-xs',
  sm: 'mc-ui-button-size-sm',
  md: 'mc-ui-button-size-md',
  lg: 'mc-ui-button-size-lg',
  xl: 'mc-ui-button-size-xl',
}
const Button = ({ label, children, onClick, color = 'default', type = 'primary', size = 'md' }) => (
  <a
    key={`mc-ui-button${label}`}
    className={classnames(s.button, s[sizes[size]], s[`mc-ui-button-${type}-${color}`])}
    onClick={onClick}
  >
    <span
      className={classnames(
        s[`mc-ui-button-text`],
        s[`mc-ui-button-text-${type}`],
        s[`mc-ui-button-text-${type}-${color}`],
      )}
    >
      {label || children}
    </span>
  </a>
);

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};
export default Button;
