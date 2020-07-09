import React from 'react';
import classnames from 'classnames';

export default ({ classes = [] }) => (
  <svg
    id="bar-graph"
    data-name="bar-graph"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classnames(classes)}
  >
    <g>
      <path
        className={classnames(classes)}
        d="M4.24,11.75H5.49a.13.13,0,0,0,.13-.13V4.38a.13.13,0,0,0-.13-.13H4.24a.12.12,0,0,0-.12.13v7.24A.12.12,0,0,0,4.24,11.75Zm3-4.37H8.49a.13.13,0,0,0,.13-.13V4.38a.13.13,0,0,0-.13-.13H7.24a.12.12,0,0,0-.12.13V7.25A.12.12,0,0,0,7.24,7.38Zm3,1.12h1.25a.13.13,0,0,0,.13-.12v-4a.13.13,0,0,0-.13-.13H10.24a.12.12,0,0,0-.12.13v4A.12.12,0,0,0,10.24,8.5Zm3.38-6.75H2.12a.5.5,0,0,0-.5.5v11.5a.5.5,0,0,0,.5.5h11.5a.5.5,0,0,0,.5-.5V2.25A.5.5,0,0,0,13.62,1.75ZM13,13.12H2.74V2.88H13Z"
      />
    </g>
  </svg>
);
