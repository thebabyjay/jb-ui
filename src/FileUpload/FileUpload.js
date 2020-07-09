import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import Dashboard from '@uppy/react/lib/Dashboard';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.uppy = Uppy(this.props.options).use(XHRUpload, {
      endpoint: this.props.endpoint,
      method: 'post',
      formData: true,
      fieldName: 'file',
      headers: {
        authorization: `Bearer ${this.props.token}`,
      },
    });
  }

  componentWillUnmount() {
    this.uppy.close();
  }

  render() {
    return <Dashboard uppy={this.uppy} />;
  }
}

FileUpload.propTypes = {
  endpoint: PropTypes.string,
  token: PropTypes.string,
  options: PropTypes.object,
};

export default FileUpload;
