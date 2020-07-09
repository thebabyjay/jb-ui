import IconButton from '@material-ui/core/IconButton';
import SnackbarContainer from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import s from './Snackbar.scss';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const Snackbar = ({ variant, message, onClose, autoHideDuration }) => {
  const [open, setOpen] = React.useState(true);
  const Icon = variantIcon[variant];

  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  const action = [
    <IconButton
      key="close"
      aria-label="close"
      color="inherit"
      className={s.snackbar__close}
      onClick={handleClose}
    >
      <CloseIcon className={s.snackbar__icon} />
    </IconButton>,
  ];

  return (
    <React.Fragment>
      <SnackbarContainer
        className={s.snackbar}
        open={open}
        onClose={handleClose}
        autoHideDuration={autoHideDuration}
        action={action}
      >
        <SnackbarContent
          className={s[`snackbar__content__${variant}`]}
          message={
            <span className={s.snackbar__content__message}>
              <Icon
                className={classnames(
                  s.snackbar__content__message__icon,
                  s.snackbar__content__message__iconVariant,
                )}
              />
              {message}
            </span>
          }
          action={action}
        />
      </SnackbarContainer>
    </React.Fragment>
  );
};

Snackbar.defaultProps = {
  autoHideDuration: 6000,
};

Snackbar.propTypes = {
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  message: PropTypes.string,
  onClose: PropTypes.func,
  autoHideDuration: PropTypes.number,
};

export default Snackbar;
