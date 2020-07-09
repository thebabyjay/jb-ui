import React from 'react';
import { mount } from 'enzyme';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ErrorMessage from './ErrorMessage';
import theme from '../../theme';

describe('<ErrorMessage />', () => {
  let ThemedComponent;
  beforeAll(() => {
    ThemedComponent = ({ children }) => <ThemeProvider theme={createMuiTheme(theme)}>{children}</ThemeProvider>; // eslint-disable-line
  });
  it('Renders component', () => {
    const component = mount(
      <ThemedComponent>
        <ErrorMessage />
      </ThemedComponent>,
    );
    expect(false).toBeTruthy();
  });
});
