import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import s from './MenuItem.scss';

const MenuItem = ({ children, label, value = '', selected = false, onClick }) => (
  <li
    role="option"
    aria-selected={false}
    className={classnames(s.menuItem, selected ? s.menuItem__selected : null)}
    onMouseDown={() => onClick(value)}
    onKeyPress={() => onClick(value)}
  >
    {label || children}
  </li>
);
MenuItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.any,
};

export default MenuItem;
