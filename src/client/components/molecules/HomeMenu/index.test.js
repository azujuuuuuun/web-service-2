// @flow

import React from 'react';
import { mount } from 'enzyme';

import HomeMenu from './index';

describe('HomeMenu', () => {
  test('renders a List component', () => {
    const mockFn = jest.fn();
    const props = {
      selectedPath: '/',
      handleListItemClick: mockFn,
    };
    const wrapper = mount(<HomeMenu {...props} />);

    expect(wrapper.find('List').length).toBe(1);
  });

  test('renders three ListItem component', () => {
    const mockFn = jest.fn();
    const props = {
      selectedPath: '/',
      handleListItemClick: mockFn,
    };
    const wrapper = mount(<HomeMenu {...props} />);

    expect(wrapper.find('ListItem').length).toBe(3);
  });

  test('simulates first ListItem component click event', () => {
    const mockFn = jest.fn();
    const props = {
      selectedPath: '/',
      handleListItemClick: mockFn,
    };
    const wrapper = mount(<HomeMenu {...props} />);

    wrapper
      .find('ListItem')
      .first()
      .simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('simulates second ListItem component click event', () => {
    const mockFn = jest.fn();
    const props = {
      selectedPath: '/',
      handleListItemClick: mockFn,
    };
    const wrapper = mount(<HomeMenu {...props} />);

    wrapper
      .find('ListItem')
      .at(1)
      .simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('simulates last ListItem component click event', () => {
    const mockFn = jest.fn();
    const props = {
      selectedPath: '/',
      handleListItemClick: mockFn,
    };
    const wrapper = mount(<HomeMenu {...props} />);

    wrapper
      .find('ListItem')
      .last()
      .simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
