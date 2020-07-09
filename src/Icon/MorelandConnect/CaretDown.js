import React from 'react';
import classnames from 'classnames';

export default ({ classes = [] }) => (
  <svg
    id="name"
    data-name="name"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={classnames(classes)}
  >
    <g>
      <path
        className={classnames(classes)}
        d="M19.6972 7.03125H4.30343C3.84171 7.03125 3.5839 7.51875 3.86984 7.85156L11.5667 16.7766C11.787 17.032 12.2112 17.032 12.4339 16.7766L20.1308 7.85156C20.4167 7.51875 20.1589 7.03125 19.6972 7.03125Z"
      />
    </g>
  </svg>
);
