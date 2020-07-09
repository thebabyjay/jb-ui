import React from 'react';
import Checkbox from './Checkbox';

export default {
  Default: <Checkbox name="myCheckbox" label="My Checkbox" onChange={(val) => console.log('Checkbox Value: ', val)} />,

  Checked: <Checkbox name="myCheckbox" label="My Checkbox" checked onChange={(val) => console.log('Checkbox Value: ', val)} />,

  NoLabel: <Checkbox name="myCheckbox" onChange={() => console.log('Checkbox Value: ', val)} />,

  NoLabelChecked: <Checkbox name="myCheckbox" checked onChange={(val) => console.log('Checkbox Value: ', val)} />,

  CheckboxPrimary: <Checkbox name="myCheckbox" checked onChange={(val) => console.log('Checkbox Value: ', val)} />,
  
  LabelAsFunction: <Checkbox name="myCheckbox" checked label={() => <h1>Hello</h1>} />,
};
