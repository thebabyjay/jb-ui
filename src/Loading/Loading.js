import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/styles';
import styles from './Loading.styles';
const useStyles = makeStyles(styles);

const Loading = props => {
  const classes = useStyles();
  if (props.display === 'modal') {
    return (
      <Dialog open>
        <DialogContent style={{ overflow: 'hidden', padding: '8px'}}>
          <div style={{ width: 50, height: 60, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return <CircularProgress />;
};
Loading.defaultProps = {};
Loading.propTypes = {
  display: PropTypes.string,
};

export default Loading;
