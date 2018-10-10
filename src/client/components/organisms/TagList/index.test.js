// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';

import TagList from './index';
import history from '../../../history';

describe('TagList', () => {
  test('最初のボタンのテキストが"週間"', () => {
    const mockFn = jest.fn();
    const props = {
      tagRanking: [],
      handleClickTagRanking: mockFn,
    };
    const wrapper = mount(<TagList {...props} />);

    const text = wrapper
      .find('button')
      .first()
      .text();
    expect(text).toBe('週間');
  });

  test('simulate first button click event', () => {
    const mockFn = jest.fn();
    const props = {
      tagRanking: [],
      handleClickTagRanking: mockFn,
    };
    const wrapper = mount(<TagList {...props} />);

    wrapper
      .find('button')
      .first()
      .simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('2番目のボタンのテキストが"月間"', () => {
    const mockFn = jest.fn();
    const props = {
      tagRanking: [],
      handleClickTagRanking: mockFn,
    };
    const wrapper = mount(<TagList {...props} />);

    const text = wrapper
      .find('button')
      .at(1)
      .text();
    expect(text).toBe('月間');
  });

  test('simulate second button click event', () => {
    const mockFn = jest.fn();
    const props = {
      tagRanking: [],
      handleClickTagRanking: mockFn,
    };
    const wrapper = mount(<TagList {...props} />);

    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('最後のボタンのテキストが"全て"', () => {
    const mockFn = jest.fn();
    const props = {
      tagRanking: [],
      handleClickTagRanking: mockFn,
    };
    const wrapper = mount(<TagList {...props} />);

    const text = wrapper
      .find('button')
      .last()
      .text();
    expect(text).toBe('全て');
  });

  test('simulate last button click event', () => {
    const mockFn = jest.fn();
    const props = {
      tagRanking: [],
      handleClickTagRanking: mockFn,
    };
    const wrapper = mount(<TagList {...props} />);

    wrapper
      .find('button')
      .last()
      .simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  test('renders a List component', () => {
    const mockFn = jest.fn();
    const props = {
      tagRanking: [],
      handleClickTagRanking: mockFn,
    };
    const wrapper = mount(<TagList {...props} />);

    expect(wrapper.find('List').length).toBe(1);
  });

  test('renders ten ListItem component', () => {
    const mockFn = jest.fn();
    const tagRanking = [];
    for (let i = 0; i < 10; i += 1) {
      tagRanking.push({ id: String(i), name: String(i), itemsCount: i });
    }
    const props = {
      tagRanking,
      handleClickTagRanking: mockFn,
    };
    const wrapper = mount(
      // $FlowFixMe
      <Router history={history}>
        <TagList {...props} />
      </Router>,
    );

    expect(wrapper.find('ListItem').length).toBe(10);
  });
});
