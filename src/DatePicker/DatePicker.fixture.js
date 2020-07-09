import React from 'react';
import DatePicker from './DatePicker';
import Grid from '@material-ui/core/Grid';
import TextField from '../TextField';
import Select from '../Select';

export default {
  noLabel: <DatePicker />,
  withLabel: <DatePicker label={"Select Date"} />,
  withLabelAndValue: <DatePicker label={"Select Date"} value={'09/21/2019'} />,
  selectableValue: () => {
    const [val, setVal] = React.useState('09/21/2019')
    return <DatePicker value={val} onChange={(val) => setVal(val)} />;
  },
  withDateTimeFormatAsValue: () => <DatePicker label="Select Date" value="2019-12-16T00:00:00" />,
  requiredDateTime: <DatePicker required label={"Select Date"} />,
  requiredDateTimeWithValue: <DatePicker required label={"Select Date"} value={'09/21/2019'} />,
  inAForm: () => (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField id='someField3' name='someField3' label='Some Field' value={'Some Text'} />
      </Grid>
      <Grid item xs={6}>
        <Select
          label={'Some Select'}
          options={[]}
        />
      </Grid>
      <Grid item xs={6}>
        <DatePicker label={'Hey Datep'} />
      </Grid>
      <Grid item xs={6}>
        <TextField id='someField3' name='someField3' label='Some Field' value={'Some Text'} />
      </Grid>
      <Grid item xs={6}>
        <Select
          label={'Some Select'}
          options={[
            {label: "Somethihng", value:"1"}
          ]}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField id='someField3' name='someField' label='Some Field' value={'Some Text'} />
      </Grid>
      <Grid item xs={6}>
        <DatePicker label={'Hey Datep'} />
      </Grid>
      <Grid item xs={6}>
        <Select
          label={'Some Select'}
          options={[]}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField id='someField3' name='someField' label='Some Field' value={'Some Text'} />
      </Grid>
    </Grid>
  )
};
