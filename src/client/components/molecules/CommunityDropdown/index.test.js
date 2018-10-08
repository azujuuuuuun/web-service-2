// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';

import CommunityDropdown from './index';
import history from '../../../history';

describe('CommunityDropdown', () => {
  test('not render MenuItem components (isOpen: false)', () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: false,
        kind: 'community',
      },
      closeDropdown: mockFn,
    };
    const wrapper = mount(<CommunityDropdown {...props} />);

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
    const wrapper = mount(<CommunityDropdown {...props} />);

    expect(wrapper.find('MenuItem').length).toBe(0);
  });

  test('renders a MenuItem components', () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: true,
        kind: 'community',
      },
      closeDropdown: mockFn,
    };
    const wrapper = mount(
      // $FlowFixMe
      <Router history={history}>
        <CommunityDropdown {...props} />
      </Router>,
    );

    expect(wrapper.find('MenuItem').length).toBe(1);
  });
});
