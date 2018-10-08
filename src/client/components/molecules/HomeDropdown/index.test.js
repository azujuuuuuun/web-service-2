// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';

import HomeDropdown from './index';
import history from '../../../history';

describe('HomeDropdown', () => {
  test('not render MenuItem components (isOpen: false)', () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: false,
        kind: 'home',
      },
      closeDropdown: mockFn,
    };
    const wrapper = mount(<HomeDropdown {...props} />);

    expect(wrapper.find('MenuItem').length).toBe(0);
  });

  test("not render MenuItem components (kind: '')", () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: true,
        kind: '',
      },
      closeDropdown: mockFn,
    };
    const wrapper = mount(<HomeDropdown {...props} />);

    expect(wrapper.find('MenuItem').length).toBe(0);
  });

  test('renders three MenuItem components', () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: true,
        kind: 'home',
      },
      closeDropdown: mockFn,
    };
    const wrapper = mount(
      // $FlowFixMe
      <Router history={history}>
        <HomeDropdown {...props} />
      </Router>,
    );

    expect(wrapper.find('MenuItem').length).toBe(3);
  });
});
