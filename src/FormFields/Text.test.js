import React from 'react';
import { mount } from 'enzyme';
import Text from './Text';

describe('<Text />', () => {
  beforeEach(() => null);
  beforeAll(() => null);
  afterEach(() => null);
  afterAll(() => null);

  it('Renders component', () => {
    const component = mount(<Text label="test" value="123" />);
    expect('label' in component.props()).toEqual(true);
    expect(component.find('label').text()).toEqual('test');
    expect(component.find('input').props().value).toEqual('123');
  });
});
