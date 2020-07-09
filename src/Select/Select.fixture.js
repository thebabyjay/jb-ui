import React from 'react';
import Select from './Select';
import { Grid, Dialog, DialogContent } from '@material-ui/core';

export default {
  selectNoOptions: <Select />,
  selectOptions: (
    <Select
      options={[
        {
          label: 'Another One',
          value: 'anotherOne',
        },
        {
          label: 'Another One Again',
          value: 'anotherOneAgain',
          selected: true,
        },
        {
          label: 'More Another One',
          value: 'more',
        },
      ]}
    />
  ),
  selectOptionsMultiSelect: (
    <Select
      options={[
        {
          label: 'Another One',
          value: 'anotherOne',
        },
        {
          label: 'Another One Again',
          value: 'anotherOneAgain',
          selected: true,
        },
        {
          label: 'More Another One',
          value: 'more',
        },
      ]}
      multiple
    />
  ),
  selectHideLabel: (
    <Select
      showLabel={false}
      options={[
        {
          label: 'Another One',
          value: '1',
        },
        {
          label: 'Another One Again',
          value: '2',
        },
        {
          label: 'More Another One',
          value: '3',
        },
      ]}
    />
  ),
  selectWithValue: (
    <Select
      value="1"
      options={[
        {
          label: 'Another One',
          value: '1',
        },
        {
          label: 'Another One Again',
          value: '2',
        },
        {
          label: 'More Another One',
          value: '3',
        },
      ]}
    />
  ),
  selectMulti: ()=><Select
    multiple
    options={[
      {
        label: 'Another One',
        value: '1',
      },
      {
        label: 'Another One Again',
        value: '2',
      },
      {
        label: 'More Another One',
        value: '3',
      },
    ]}
  />,
  maxHeightTest: ()=><Select
    multiple
    options={[...(new Array(100))].map(() => ({
      label: 'Another One',
      value: '1',
    }))}
  />,
  selectWithArrayofValues: (
    <Select
      values={["1", "3"]}
      multiple
      options={[
        {
          label: 'Another One',
          value: '1',
        },
        {
          label: 'Another One Again',
          value: '2',
        },
        {
          label: 'More Another One',
          value: '3',
        },
      ]}
    />
  ),
  selectInContainer: (
    <div style={{ width: '300px' }}>
      <Select
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
    </div>
  ),
  selectOptionLabelAsFunction: (
    <div style={{ width: '300px' }}>
      <Select
        label="selectOptionLabelAsFunction"
        optionLabel={option => `${option.label}_custom`}
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
    </div>
  ),
  selectOptionsAreModelResults: (
    <div style={{ width: '300px' }}>
      <Select
        label="selectOptionsAreModelResults"
        options={{
          results: [
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
          ],
        }}
      />
    </div>
  ),
  selectInDialog: () => {
    const [showSelect, setShowSelect] = React.useState(false);

    return (
      <Dialog fullWidth maxWidth="lg" open>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <Select
                label="selectOptionsAreModelResults"
                options={{
                  results: [
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
                  ],
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  },
  selectWithNoneOption: (
    <Select
      options={[
        {
          label: 'Another One',
          value: '1',
        },
        {
          label: 'Another One Again',
          value: '2',
        },
        {
          label: 'More Another One',
          value: '3',
        },
      ]}
      showNoneOption={true}
    />
  ),
  selectWithNoneOptionLabel: (
    <Select
      options={[
        {
          label: 'Another One',
          value: '1',
        },
        {
          label: 'Another One Again',
          value: '2',
        },
        {
          label: 'More Another One',
          value: '3',
        },
      ]}
      showNoneOption={true}
      noneOptionLabel={'None'}
    />
  ),
  requiredSelectOptions: (
    <Select
      required
      label="Required Select"
      options={[
        {
          label: 'Another One',
          value: 'anotherOne',
        },
        {
          label: 'Another One Again',
          value: 'anotherOneAgain',
          selected: true,
        },
        {
          label: 'More Another One',
          value: 'more',
        },
      ]}
    />
  ),
};



