import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import s from './SingleStat.scss';

const SingleStat = ({stat, label}) => {
  return (
    <div className={classnames(s.singleStat)}>
      <div className={s.singleStat__statContainer}><span className={s.singleStat__stat}>{stat}</span></div>
      <div className={s.singleStat__labelContainer}><span className={s.singleStat__label}>{label}</span></div>
    </div>
  );
};

SingleStat.propTypes = {
  stat: PropTypes.string,
  label: PropTypes.string,
};

export default SingleStat;
