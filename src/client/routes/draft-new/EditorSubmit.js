// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import { change } from 'redux-form';
import type { FieldProps, FormProps } from 'redux-form';
import type { Dispatch } from 'redux';

import { openDropdown, closeDropdown } from '../../actions';
import type { Dropdown } from '../../reducers/dropdown';

type Props = {
  status: FieldProps,
  handleSubmit: FormProps,
  openEditorSubmitDropdown: any,
  dropdown: Dropdown,
  closeEditorSubmitDropdown: any,
  changeStatus: (status: string) => void,
};

const EditorSubmit = (props: Props) => {
  const {
    status,
    handleSubmit,
    openEditorSubmitDropdown,
    dropdown,
    closeEditorSubmitDropdown,
    changeStatus,
  } = props;
  return (
    <div>
      {status.input.value === 'posted' ? (
        <Button onClick={handleSubmit}>
          <PublishIcon />
          Qiitaに投稿
        </Button>
      ) : (
        <Button onClick={handleSubmit}>
          <SaveIcon />
          下書き保存
        </Button>
      )}
      <IconButton onClick={openEditorSubmitDropdown}>
        <ArrowDropUpIcon />
      </IconButton>
      <Menu
        open={dropdown.isOpen && dropdown.kind === 'editorSubmit'}
        onClose={closeEditorSubmitDropdown}
      >
        <MenuItem onClick={() => changeStatus('draft')}>
          <ListItemIcon>
            <SaveIcon />
          </ListItemIcon>
          <ListItemText primary="下書き保存" />
        </MenuItem>
        <MenuItem onClick={() => changeStatus('posted')}>
          <ListItemIcon>
            <PublishIcon />
          </ListItemIcon>
          <ListItemText primary="Qiita に投稿" />
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = state => ({
  dropdown: state.dropdown,
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  openEditorSubmitDropdown: () =>
    dispatch(openDropdown({ kind: 'editorSubmit' })),
  closeEditorSubmitDropdown: () => dispatch(closeDropdown()),
  changeStatus: (status: string) => dispatch(change('item', 'status', status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorSubmit);
