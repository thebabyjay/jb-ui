import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';
import ErrorToaster from './ErrorToaster';

const ErrorContainer = ({ type, ...rest }) => {
  console.log('type', type);
  switch (type) {
    case 'toaster':
      return <ErrorToaster {...rest} />;
    default:
      return <ErrorMessage {...rest} />;
  }
};
ErrorContainer.propTypes = {
  type: PropTypes.string,
};
export default ErrorContainer;
