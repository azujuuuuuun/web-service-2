// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import type { FieldProps, FormProps } from 'redux-form';

import GlobalHeader from '../containers/GlobalHeaderContainer';
import SettingsMenu from './SettingsMenu';

type Props = {
  viewer: any,
  firstName: FieldProps,
  lastName: FieldProps,
  web: FieldProps,
  organization: FieldProps,
  location: FieldProps,
  description: FieldProps,
  handleSubmit: FormProps,
};

const SettingsProfilePage = (props: Props) => {
  const {
    viewer,
    firstName,
    lastName,
    web,
    organization,
    location,
    description,
    handleSubmit,
  } = props;
  return (
    <div className="settings-profile-page">
      <GlobalHeader />
      <Grid container justify="center" spacing={16}>
        <Grid item xs={3}>
          <SettingsMenu />
        </Grid>
        <Grid item xs={7}>
          <div className="profile">
            <div className="titleSection">
              <div className="account">
                <div className="avatar">
                  <Avatar src={viewer.avatarImgSrc}>
                    {viewer.username}
                  </Avatar>
                </div>
                <div className="username">
                  <Link to={`/${viewer.username}`}>
                    {viewer.username}アカウント
                  </Link>
                </div>
              </div>
              <span>/</span>
              <div className="title">
                <span>公開用プロフィール</span>
              </div>
            </div>
            <div className="input">
              <div>名前</div>
              <div className="first-name">
                <TextField
                  value={firstName.input.value}
                  onChange={firstName.input.onChange}
                  placeholder="名"
                />
              </div>
              <TextField
                value={lastName.input.value}
                onChange={lastName.input.onChange}
                placeholder="姓"
              />
            </div>
            <div className="input">
              <div>サイト/ブログ</div>
              <TextField
                value={web.input.value}
                onChange={web.input.onChange}
                fullWidth
              />
            </div>
            <div className="input">
              <div>所属している組織・会社</div>
              <TextField
                value={organization.input.value}
                onChange={organization.input.onChange}
                fullWidth
              />
            </div>
            <div className="input">
              <div>居住地</div>
              <TextField
                value={location.input.value}
                onChange={location.input.onChange}
                fullWidth
              />
            </div>
            <div className="input">
              <div>自己紹介</div>
              <TextField
                value={description.input.value}
                onChange={description.input.onChange}
                multiline
                rows="4"
                fullWidth
              />
            </div>
            <div>
              <Button onClick={handleSubmit}>
                更新する
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SettingsProfilePage;
