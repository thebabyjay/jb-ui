import React from 'react';
import Snackbar from './Snackbar';

export default {
  component: Snackbar,
  title: 'Snackbar',
};

export const Default = () => <Snackbar variant="info" message="Something is happening." />;
