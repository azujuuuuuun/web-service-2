// @flow

import React from 'react';
import { shallow } from 'enzyme';

import TagFeedTemplate from './index';

describe('TagFeedTemplate', () => {
  test('renders a HomeMenu', () => {
    const mockFn = jest.fn();
    const props = {
      handleListItemClick: mockFn,
      items: [],
    };
    const wrapper = shallow(<TagFeedTemplate {...props} />);

    expect(wrapper.find('HomeMenu').length).toBe(1);
  });

  test('renders a ItemList', () => {
    const mockFn = jest.fn();
    const props = {
      handleListItemClick: mockFn,
      items: [],
    };
    const wrapper = shallow(<TagFeedTemplate {...props} />);

    expect(wrapper.find('ItemList').length).toBe(1);
  });
});
