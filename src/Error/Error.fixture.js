import React from 'react';
import ErrorToaster from './ErrorToaster';
import ErrorMessage from './ErrorMessage';
import ErrorModal from './ErrorModal';
import ErrorContainer from '.';
const ObjectError = new Error();
ObjectError.code = 400;
ObjectError.message = {
  error: "Something went wrong",
};

export default {
  errorToaster: <ErrorToaster message="There was a problem" onClose={() => null} />,
  errorModal: <ErrorModal title="Error" error={new Error('Something went wrong')} />,
  errorMessage: <ErrorMessage message="There was a problem" />,
  errorObject: <ErrorContainer type={'message'} error={ObjectError} />,
};
