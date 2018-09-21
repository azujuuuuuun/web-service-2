// @flow

import React from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form';
import type { FieldProps, FormProps } from 'redux-form';

import EditorSubmit from '../components/EditorSubmit';
import { openDropdown, closeDropdown } from '../actions';

type Props = {
  status: FieldProps,
  handleSubmit: FormProps,
  dropdown: {
    kind: string,
    isOpen: boolean,
  },
  openEditorSubmitDropdown: any,
  closeEditorSubmitDropdown: any,
  changeStatus: (status: string) => void,
};

// eslint-disable-next-line
class EditorSubmitContainer extends React.Component<Props, void> {
  render() {
    const {
      status,
      handleSubmit,
      openEditorSubmitDropdown,
      dropdown,
      closeEditorSubmitDropdown,
      changeStatus,
    } = this.props;
    return (
      <EditorSubmit
        status={status}
        handleSubmit={handleSubmit}
        openEditorSubmitDropdown={openEditorSubmitDropdown}
        dropdown={dropdown}
        closeEditorSubmitDropdown={closeEditorSubmitDropdown}
        changeStatus={changeStatus}
      />
    );
  }
}

const mapStateToProps = state => ({
  dropdown: state.dropdown,
});

const mapDispatchToProps = (dispatch: any) => ({
  openEditorSubmitDropdown: () =>
    dispatch(openDropdown({ kind: 'editorSubmit' })),
  closeEditorSubmitDropdown: () => dispatch(closeDropdown()),
  changeStatus: (status: string) => dispatch(change('item', 'status', status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorSubmitContainer);
