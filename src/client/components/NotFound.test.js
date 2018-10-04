// @flow

import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './NotFound';

describe('<NotFound />', () => {
  test('renders a div element', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('div').length).toBe(1);
  });

  test('renders a h1 element', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
