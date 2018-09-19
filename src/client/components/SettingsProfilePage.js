// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import type { FieldProps, FormProps } from 'redux-form';

import GlobalHeader from '../containers/GlobalHeaderContainer';
import SettingsMenu from './SettingsMenu';
import TitleSection from './TitleSection';

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

const InputWrapper = styled.div`
  margin-bottom: 2rem;
`;

const FirstName = styled.div`
  display: inline-block;
  margin-right: 1rem;
`;

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
    <div>
      <GlobalHeader />
      <Grid container justify="center" spacing={16}>
        <Grid item xs={3}>
          <SettingsMenu />
        </Grid>
        <Grid item xs={7}>
          <div>
            <TitleSection
              avatarImgSrc={viewer.avatarImgSrc}
              username={viewer.username}
              title="公開用プロフィール"
            />
            <InputWrapper>
              <div>名前</div>
              <FirstName>
                <TextField
                  value={firstName.input.value}
                  onChange={firstName.input.onChange}
                  placeholder="名"
                />
              </FirstName>
              <TextField
                value={lastName.input.value}
                onChange={lastName.input.onChange}
                placeholder="姓"
              />
            </InputWrapper>
            <InputWrapper>
              <div>サイト/ブログ</div>
              <TextField
                value={web.input.value}
                onChange={web.input.onChange}
                fullWidth
              />
            </InputWrapper>
            <InputWrapper>
              <div>所属している組織・会社</div>
              <TextField
                value={organization.input.value}
                onChange={organization.input.onChange}
                fullWidth
              />
            </InputWrapper>
            <InputWrapper>
              <div>居住地</div>
              <TextField
                value={location.input.value}
                onChange={location.input.onChange}
                fullWidth
              />
            </InputWrapper>
            <InputWrapper>
              <div>自己紹介</div>
              <TextField
                value={description.input.value}
                onChange={description.input.onChange}
                multiline
                rows="4"
                fullWidth
              />
            </InputWrapper>
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
