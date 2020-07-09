import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuItem from '../MenuItem';
import s from './Menu.scss';

const Menu = ({ open, options = [], onChange, width = '100%', showNoneOption = true, noneOptionLabel = 'None' }) => (
  <div className={s.menu} style={{ width }}>
    <div className={s.menu__menu}>
      {
        showNoneOption && <MenuItem
          label={noneOptionLabel}
          value={''}
          selected={!options.some(o => o.selected)}
          onClick={onChange}
        />
      }
      {options.map(option => (
        <MenuItem
          label={option.label}
          value={option.value}
          selected={Boolean(option.selected) || false}
          onClick={onChange}
        />
      ))}
    </div>
  </div>
);

Menu.defaultProps = {};
Menu.propTypes = {
  open: PropTypes.bool,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default Menu;
