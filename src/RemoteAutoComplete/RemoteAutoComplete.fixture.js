import React from 'react';
import RemoteAutoComplete from './RemoteAutoComplete';


const TestRemoteAutoComplete = () => {
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState([
    {
      id: 123,
      name: "Jay",
    },
    {
      id: 34232,
      name: "Matt",
    }
  ])
  const onFetch = val => {
    setLoading(true)
    setTimeout(() => {
      setOptions(options.concat([
        {
          id: val,
          name: val,
        },
      ]));
      setLoading(false);
    }, 3000)
    
  }
  return (
    <div>
      <div>
        <RemoteAutoComplete
          label={'Remote AutoComplete'}
          loading={loading}
          options={options}
          onChange={(val) => console.log('onChange val', val)}
          onFetch={onFetch}
          optionValueKey={'id'}
          optionLabelKey={'name'}
          showNoneOption={false}
        />
      </div>
    </div>
  )
}
export default {
  loading: <RemoteAutoComplete
    label={'Remote AutoComplete'}
    loading={true}
  />,
  testing: TestRemoteAutoComplete,
  idealPropsWithValue: <RemoteAutoComplete
    label={'Remote AutoComplete'}
    value={34232}
    options={[
      {
        id: 123,
        name: "Jay",
      },
      {
        id: 34232,
        name: "Matt",
      }
    ]}
    onChange={(val) => console.log('onChange val', val)}
    onFetch={(val) => console.log('onFetch val', val)}
    optionValueKey={'id'}
    optionLabelKey={'name'}
    showNoneOption={false}
  />,
  loadingWithValue: <RemoteAutoComplete
    loading
    label={'Remote AutoComplete'}
    value={34232}
    options={[
      {
        id: 123,
        name: "Jay",
      },
      {
        id: 34232,
        name: "Matt",
      }
    ]}
    onChange={(val) => console.log('onChange val', val)}
    onFetch={(val) => console.log('onFetch val', val)}
    optionValueKey={'id'}
    optionLabelKey={'name'}
    showNoneOption={false}
  />,
};
