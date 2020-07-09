import React from 'react';
import TextArea from './TextArea';

export default {
  TextArea: <TextArea label="Enter some text" onChange={val => console.log('val', val)} />,
};
