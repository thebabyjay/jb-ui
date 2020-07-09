import React from 'react';
import TextField from '../TextField';
import LocalAutoComplete from './LocalAutoComplete';

const options = [
  {
    id: 123,
    name: "Jay",
  },
  {
    id: 34232,
    name: "Matt",
  },
  {
    id: 453,
    name: "Bowen",
  },
  {
    id: 43221,
    name: "Joe",
  }
];

const RenderedAsComponent = () => {
  const [value, setValue] = React.useState('');

  return (
    <LocalAutoComplete
      label={'Local AutoComplete'}
      value={value}
      options={options}
      onChange={val => setValue(val)}
      optionValueKey={'id'}
      optionLabelKey={'name'}
      showNoneOption={true}
      debug
    />
  )
}
const FormComponent = () => {

  const [input1, setInput1] = React.useState('');
  const [value, setValue] = React.useState('');
  const [input3, setInput3] = React.useState('');
  return (
    <div>
      <div>
        <TextField id='input1' name='input1' label='Input 1' value={input1} onChange={val => setInput1(val)} />
      </div>
      <div>
        <LocalAutoComplete
          label={'Local AutoComplete'}
          value={value}
          options={options}
          onChange={val => {
            console.log('onChange val', val);
            setValue(val);
          }}
          optionValueKey={'id'}
          optionLabelKey={'name'}
          showNoneOption={true}
          debug
        />
      </div>
      <div>
        <TextField id='input3' name='input3' label='Input 3' value={input3} onChange={val => setInput3(val)} />
      </div>
    </div>
  )
}

export default {
  LocalAutoComplete: <LocalAutoComplete
    label={'Local AutoComplete'}
    options={options}
    onChange={(val) => console.log('onChange val', val)}
    optionValueKey={'id'}
    optionLabelKey={'name'}
    showNoneOption={true}
    debug
  />,
  LocalAutoCompleteWithLabelFunction: <LocalAutoComplete
    label={'Local AutoComplete'}
    value={123}
    options={options}
    onChange={(val) => console.log('onChange val', val)}
    optionValueKey={'id'}
    optionLabelKey={'name'}
    optionLabelRenderer={val => `${val.id} - ${val.name}`}
    showNoneOption={true}
    debug
  />,
  RenderedAsComponent: <RenderedAsComponent />,
  InAForm: <FormComponent />,
  RequiredLocalAutoComplete: <LocalAutoComplete
    label={'Required Local AutoComplete'}
    options={options}
    onChange={(val) => console.log('onChange val', val)}
    optionValueKey={'id'}
    optionLabelKey={'name'}
    showNoneOption={true}
    debug
    required
  />,
};
