import React from 'react';
import TextField from './TextField';

export default {
  TextField: (
    <TextField
      state="default"
      value="John"
      label="First Name"
      onChange={val => console.log('onChange', val)}
    />
  ),
  withIconLeft: (
    <TextField
      state="default"
      value="John"
      label="First Name"
      iconLeft="home"
      onChange={val => console.log('onChange', val)}
    />
  ),
  withIconRight: (
    <TextField
      state="default"
      value="John"
      label="First Name"
      iconRight="gear"
      onChange={val => console.log('onChange', val)}
    />
  ),
  required: (
    <TextField
      state="default"
      value=""
      label="First Name"
      onChange={val => console.log('onChange', val)}
    />
  ),
  withPasswordType: (
    <TextField
      state="default"
      value=""
      label="Password"
      onChange={val => console.log('onChange', val)}
      type="password"
    />
  ),
  required: (
    <TextField
      state="default"
      value=""
      label="Password"
      onChange={val => console.log('onChange', val)}
      required
      type="password"
    />
  ),
};
