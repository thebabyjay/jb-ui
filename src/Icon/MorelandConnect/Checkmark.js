import React from 'react';
import classnames from 'classnames';

export default ({ classes = [] }) => (
  <svg
    id="bar-graph"
    data-name="bar-graph"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 10"
    className={classnames(classes)}
  >
    <g>
      <path
        className={classnames(classes)}
        d="M11.4685 0.597656H10.5128C10.3788 0.597656 10.2517 0.65918 10.1696 0.764453L4.53272 7.90527L1.82979 4.48047C1.7889 4.42855 1.73679 4.38658 1.67735 4.35769C1.61792 4.3288 1.55271 4.31375 1.48663 4.31367H0.530964C0.439362 4.31367 0.388776 4.41895 0.444831 4.49004L4.18956 9.23418C4.36456 9.45566 4.70089 9.45566 4.87725 9.23418L11.5546 0.772656C11.6107 0.70293 11.5601 0.597656 11.4685 0.597656Z"
      />
    </g>
  </svg>
);
