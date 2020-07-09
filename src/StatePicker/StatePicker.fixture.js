import React from 'react';
import StatePicker from './StatePicker';

export default {
  noValue: <StatePicker />,
  withValue: <StatePicker value="OH" />,
  withOnChange: <StatePicker onChange={val => console.log('val', val)} />,
};
