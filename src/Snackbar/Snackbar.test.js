import React from 'react';
import { mount } from 'enzyme';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Snackbar from './Snackbar';
import theme from '../../theme';

describe('<Snackbar />', () => {
  let ThemedComponent;
  beforeAll(() => {
    ThemedComponent = ({ children }) => (
      <ThemeProvider theme={createMuiTheme(theme)}>{children}</ThemeProvider>
    ); // eslint-disable-line
  });
  it('Renders component', () => {
    const component = mount(
      <ThemedComponent>
        <Snackbar />
      </ThemedComponent>,
    );
    expect(false).toBeTruthy();
  });
});
