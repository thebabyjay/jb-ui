import React from 'react';
import { mount } from 'enzyme';
import Select from './Select';

describe('<Select />', () => {
  it('Renders component', () => {
    const component = mount(<Select label="select" />);
    expect(component.find('label').text()).toEqual('select');
  });
});
