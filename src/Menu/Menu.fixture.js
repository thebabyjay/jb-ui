import React from 'react';
import Menu from './Menu';

export default {
  menuNoOptions: <Menu open />,
  menuWithOptions: (
    <Menu
      open
      options={[
        {
          label: 'Another One',
          value: '1',
        },
        {
          label: 'Another One Again',
          value: '2',
          selected: true,
        },
        {
          label: 'More Another One',
          value: '3',
        },
      ]}
    />
  ),
};
