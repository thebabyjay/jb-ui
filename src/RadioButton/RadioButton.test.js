import React from 'react';
import { mount } from 'enzyme';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import RadioButton from './RadioButton';
import theme from '../../theme';

describe('<RadioButton />', () => {
  let ThemedComponent;
  beforeAll(() => {
    ThemedComponent = ({ children }) => <ThemeProvider theme={createMuiTheme(theme)}>{children}</ThemeProvider>; // eslint-disable-line
  });
  it('Renders component', () => {
    const component = mount(
      <ThemedComponent>
        <RadioButton />
      </ThemedComponent>,
    );
    expect(false).toBeTruthy();
  });
});
