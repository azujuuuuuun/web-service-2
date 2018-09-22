// @flow

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Fields, reduxForm } from 'redux-form';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import { compose } from 'redux';
import { connect } from 'react-redux';
import type { FieldProps, FormProps } from 'redux-form';

import GlobalHeader from '../../components/GlobalHeader';
import SettingsMenu from '../../components/SettingsMenu';
import Loading from '../../components/Loading';
import { updatePasswordRequested } from '../../actions';
import type { Viewer } from '../../reducers/viewer';

type PProps = {
  viewer: Viewer,
  currentPassword: FieldProps,
  newPassword: FieldProps,
  handleSubmit: FormProps,
};

type CProps = {
  viewer: Viewer,
  handleSubmit: any,
};

const SettingsPasswordPage = (props: PProps) => {
  const { viewer, currentPassword, newPassword, handleSubmit } = props;
  return (
    <div>
      <GlobalHeader />
      <SettingsMenu />
      <div>
        <div>
          <div>
            <Avatar src={viewer.avatarImgSrc}>{viewer.username}</Avatar>
            {viewer.username && (
              <Link to={`/${viewer.username}`}>
                {viewer.username}
                アカウント
              </Link>
            )}
          </div>
          <div>
            <span>パスワード</span>
          </div>
        </div>
        <div>
          <div>現在のパスワード</div>
          <TextField
            value={currentPassword.input.value}
            onChange={currentPassword.input.onChange}
          />
        </div>
        <div>
          <div>新しいパスワード</div>
          <TextField
            value={newPassword.input.value}
            onChange={newPassword.input.onChange}
          />
        </div>
        <div>
          <Button onClick={handleSubmit}>更新する</Button>
        </div>
      </div>
    </div>
  );
};

class SettingsPasswordContainer extends React.Component<CProps, void> { // eslint-disable-line
  render() {
    const { viewer, handleSubmit } = this.props;
    return (
      <Loading>
        <Fields
          names={['currentPassword', 'newPassword']}
          component={SettingsPasswordPage}
          viewer={viewer}
          handleSubmit={handleSubmit}
        />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.viewer,
});

const onSubmit = (values, dispatch) => {
  const { currentPassword, newPassword } = values;
  const currentHashDigest = Base64.stringify(sha256(currentPassword));
  const newHashDigest = Base64.stringify(sha256(newPassword));
  dispatch(
    updatePasswordRequested({
      currentPassword: currentHashDigest,
      newPassword: newHashDigest,
    }),
  );
};

export default compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'password',
    onSubmit,
  }),
)(SettingsPasswordContainer);
