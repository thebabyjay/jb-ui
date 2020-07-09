import React from 'react';
import Snackbar from './Snackbar';

export default {
  snackbarError: (
    <Snackbar
      variant="error"
      message="Crap! There was an error."
      autoHideDuration={99999}
      onClose={() => console.log('close')}
    />
  ),
  snackbarSuccess: (
    <Snackbar
      variant="success"
      message="We did something right!"
      autoHideDuration={99999}
      onClose={() => console.log('close')}
    />
  ),
  snackbarWarning: (
    <Snackbar
      variant="warning"
      message="Look behind you!"
      autoHideDuration={99999}
      onClose={() => console.log('close')}
    />
  ),
  snackbarInfo: (
    <Snackbar
      variant="info"
      message="Knowledge is power. -Dwight Schrute"
      autoHideDuration={99999}
      onClose={() => console.log('close')}
    />
  ),
};
