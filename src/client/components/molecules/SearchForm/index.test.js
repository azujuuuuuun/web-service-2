// @flow

import React from 'react';
import { mount } from 'enzyme';

import { SearchForm } from './index';

describe('SearchForm', () => {
  test('renders a TextField component', () => {
    const mockFn = jest.fn();
    const props = {
      searchQuery: {
        input: {
          value: '',
          onChange: mockFn,
        },
      },
      handleSubmit: mockFn,
    };
    // $FlowFixMe
    const wrapper = mount(<SearchForm {...props} />);

    expect(wrapper.find('TextField').length).toBe(1);
  });

  test('inputタグのvalue属性がpropと同じ', () => {
    const mockFn = jest.fn();
    const props = {
      searchQuery: {
        input: {
          value: 'hoge',
          onChange: mockFn,
        },
      },
      handleSubmit: mockFn,
    };
    // $FlowFixMe
    const wrapper = mount(<SearchForm {...props} />);

    expect(wrapper.find('input').prop('value')).toBe('hoge');
  });

  test('inputタグのtype属性がsearch', () => {
    const mockFn = jest.fn();
    const props = {
      searchQuery: {
        input: {
          value: 'hoge',
          onChange: mockFn,
        },
      },
      handleSubmit: mockFn,
    };
    // $FlowFixMe
    const wrapper = mount(<SearchForm {...props} />);

    expect(wrapper.find('input').prop('type')).toBe('search');
  });

  test('inputタグのplaceholder属性が"キーワードを入力"', () => {
    const mockFn = jest.fn();
    const props = {
      searchQuery: {
        input: {
          value: '',
          onChange: mockFn,
        },
      },
      handleSubmit: mockFn,
    };
    // $FlowFixMe
    const wrapper = mount(<SearchForm {...props} />);

    expect(wrapper.find('input').prop('placeholder')).toBe('キーワードを入力');
  });

  test('simulates change event', () => {
    const mockFn = jest.fn();
    const props = {
      searchQuery: {
        input: {
          value: '',
          onChange: mockFn,
        },
      },
      handleSubmit: mockFn,
    };
    // $FlowFixMe
    const wrapper = mount(<SearchForm {...props} />);

    wrapper.find('input').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });

  test('renders a Button component', () => {
    const mockFn = jest.fn();
    const props = {
      searchQuery: {
        input: {
          value: '',
          onChange: mockFn,
        },
      },
      handleSubmit: mockFn,
    };
    // $FlowFixMe
    const wrapper = mount(<SearchForm {...props} />);

    expect(wrapper.find('Button').length).toBe(1);
  });

  test('buttonタグのテキストが"検索"', () => {
    const mockFn = jest.fn();
    const props = {
      searchQuery: {
        input: {
          value: '',
          onChange: mockFn,
        },
      },
      handleSubmit: mockFn,
    };
    // $FlowFixMe
    const wrapper = mount(<SearchForm {...props} />);

    expect(wrapper.find('button').text()).toBe('検索');
  });

  test('simulates click event', () => {
    const mockFn = jest.fn();
    const props = {
      searchQuery: {
        input: {
          value: '',
          onChange: mockFn,
        },
      },
      handleSubmit: mockFn,
    };
    // $FlowFixMe
    const wrapper = mount(<SearchForm {...props} />);

    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
