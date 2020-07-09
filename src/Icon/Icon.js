import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import People from '@material-ui/icons/People';
import Settings from '@material-ui/icons/Settings';

import Home from './MorelandConnect/Home';
import BarGraph from './MorelandConnect/BarGraph';
import Gear from './MorelandConnect/Gear';
import ShoppingCart from './MorelandConnect/ShoppingCart';
import SquareCart from './MorelandConnect/SquareCart';
import Truck from './MorelandConnect/Truck';
import Document from './MorelandConnect/Document';
import Users from './MorelandConnect/Users';
import CaretDown from './MorelandConnect/CaretDown';
import Checkmark from './MorelandConnect/Checkmark';

import s from './Icon.scss';

const availableIcons = {
  home: <Home />,
  settings: <Settings />,
  people: <People />,
  barGraph: <BarGraph />,
  gear: <Gear />,
  shoppingCart: <ShoppingCart />,
  squareCart: <SquareCart />,
  truck: <Truck />,
  document: <Document />,
  users: <Users />,
  'caret-down': <CaretDown />,
  checkmark: <Checkmark />,
};

const Icon = ({ name, classes = [], onClick }) => {
  const iconName = availableIcons[name] ? name : 'home';
  return (
    <div className={classnames(classes)} onClick={onClick}>
      {React.cloneElement(availableIcons[iconName], { classes: classes.concat([s.icon__icon]) })}
    </div>
  );
};

Icon.defaultProps = {};

Icon.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.array,
};

export default Icon;
