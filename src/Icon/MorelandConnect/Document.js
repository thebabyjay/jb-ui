import React from 'react';
import classnames from 'classnames';

export default ({ classes = [] }) => (
  <svg
    id="document"
    data-name="document"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classnames(classes)}
  >
    <g>
      <path
        className={classnames(classes)}
        d="M20,7.05,15,2a.75.75,0,0,0-.53-.22H4.5a.75.75,0,0,0-.75.75V22a.76.76,0,0,0,.75.75h15a.76.76,0,0,0,.75-.75V7.58A.75.75,0,0,0,20,7.05Zm-1.51.88H14.11V3.52Zm0,13.17H5.44V3.47h7.08V8.54a1,1,0,0,0,1,1h5.06Zm-6.75-6.33H7.5a.2.2,0,0,0-.19.19v1.12a.19.19,0,0,0,.19.19h4.31a.18.18,0,0,0,.19-.19V15A.19.19,0,0,0,11.81,14.77Zm-4.5-3V12.9a.19.19,0,0,0,.19.18h9a.19.19,0,0,0,.19-.18V11.77a.2.2,0,0,0-.19-.19h-9A.2.2,0,0,0,7.31,11.77Z"
      />
    </g>
  </svg>
);
