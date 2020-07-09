import React from 'react';
import ErrorMessage from './ErrorMessage';
import ErrorToaster from './ErrorToaster';
import ErrorModal from './ErrorModal';

export default {
  component: Error,
  title: 'Error',
};

export const Default = () => <ErrorMessage message="Something went wrong." />;
export const asToaster = () => <ErrorToaster type="toaster" error="Something went wrong." onClose={() => null} />;
export const asException = () => <ErrorMessage error={new Error('Catastrophic failure.')} />;
export const asModal = () => <ErrorModal error={new Error('Something went wrong')} />;
