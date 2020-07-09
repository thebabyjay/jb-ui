import React from 'react';
import { mount } from 'enzyme';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Image from './Image';
import theme from '../../theme';

describe('<Image />', () => {
  let ThemedComponent;
  beforeAll(() => {
    ThemedComponent = ({ children }) => <ThemeProvider theme={createMuiTheme(theme)}>{children}</ThemeProvider>; // eslint-disable-line
  });
  it('Renders component', () => {
    const component = mount(
      <ThemedComponent>
        <Image />
      </ThemedComponent>,
    );
    expect(false).toBeTruthy();
  });
});
