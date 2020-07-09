import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import s from './Typography.scss';

const availableVariants = {
  h1: 'mc-ui-h1',
  h2: 'mc-ui-h2',
  s1: 'mc-ui-s1',
  s2: 'mc-ui-s2',
  p1: 'mc-ui-p1',
  p2: 'mc-ui-p2',
  p3: 'mc-ui-p3',
  n1: 'mc-ui-n1',
  n2: 'mc-ui-n2',
  n3: 'mc-ui-n3',
  b1: 'mc-ui-b1',
  b2: 'mc-ui-b2',
};
const colors = {
  default: 'mc-ui-text-color-default',
  action: 'mc-ui-button-color-action',
  active: 'mc-ui-button-color-active',
  pending: 'mc-ui-button-color-pending',
  alert: 'mc-ui-button-color-alert',
  programmable: 'mc-ui-button-color-programmable',
};
const Typography = ({ className, text, variant, color, styles, children }) => {
  const classes = [];
  if (className) {
    classes.push(className);
  }

  if (variant && availableVariants[variant]) {
    classes.push(s[availableVariants[variant]]);
  }
  if(color && colors[color]){
    console.log('colors', colors, color);
    classes.push(s[colors[color]]);
  }
  return (
    <span className={classnames(classes)} {...(styles ? { styles } : {})}>
      {text || children}
    </span>
  );
};
Typography.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.any,
};

export default Typography;
