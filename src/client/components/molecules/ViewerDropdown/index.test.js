// @flow

import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';

import ViewerDropdown from './index';
import history from '../../../history';

describe('ViewerDropdown', () => {
  test('not render MenuItem components (isOpen: false)', () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: false,
        kind: 'viewer',
      },
      closeDropdown: mockFn,
      username: '',
      draftItemId: '',
      handleClickLogout: mockFn,
    };
    const wrapper = mount(<ViewerDropdown {...props} />);

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
      username: '',
      draftItemId: '',
      handleClickLogout: mockFn,
    };
    const wrapper = mount(<ViewerDropdown {...props} />);

    expect(wrapper.find('MenuItem').length).toBe(0);
  });

  test('renders four MenuItem components', () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: true,
        kind: 'viewer',
      },
      closeDropdown: mockFn,
      username: '',
      draftItemId: '',
      handleClickLogout: mockFn,
    };
    const wrapper = mount(
      // $FlowFixMe
      <Router history={history}>
        <ViewerDropdown {...props} />
      </Router>,
    );

    expect(wrapper.find('MenuItem').length).toBe(4);
  });

  test('最初のMenuItemのテキストが"マイページ"', () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: true,
        kind: 'viewer',
      },
      closeDropdown: mockFn,
      username: 'a',
      draftItemId: '',
      handleClickLogout: mockFn,
    };
    const wrapper = mount(
      // $FlowFixMe
      <Router history={history}>
        <ViewerDropdown {...props} />
      </Router>,
    );

    const text = wrapper
      .find('MenuItem')
      .first()
      .text();
    expect(text).toBe('マイページ');
  });

  test('2番目のMenuItemのテキストが"下書き一覧"', () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: true,
        kind: 'viewer',
      },
      closeDropdown: mockFn,
      username: '',
      draftItemId: '',
      handleClickLogout: mockFn,
    };
    const wrapper = mount(
      // $FlowFixMe
      <Router history={history}>
        <ViewerDropdown {...props} />
      </Router>,
    );

    const text = wrapper
      .find('MenuItem')
      .at(1)
      .text();
    expect(text).toBe('下書き一覧');
  });

  test('3番目のMenuItemのテキストが"設定"', () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: true,
        kind: 'viewer',
      },
      closeDropdown: mockFn,
      username: '',
      draftItemId: '',
      handleClickLogout: mockFn,
    };
    const wrapper = mount(
      // $FlowFixMe
      <Router history={history}>
        <ViewerDropdown {...props} />
      </Router>,
    );

    const text = wrapper
      .find('MenuItem')
      .at(2)
      .text();
    expect(text).toBe('設定');
  });

  test('最後のMenuItemのテキストが"ログアウト"', () => {
    const mockFn = jest.fn();
    const props = {
      dropdown: {
        isOpen: true,
        kind: 'viewer',
      },
      closeDropdown: mockFn,
      username: '',
      draftItemId: '',
      handleClickLogout: mockFn,
    };
    const wrapper = mount(
      // $FlowFixMe
      <Router history={history}>
        <ViewerDropdown {...props} />
      </Router>,
    );

    const text = wrapper
      .find('MenuItem')
      .last()
      .text();
    expect(text).toBe('ログアウト');
  });
});
