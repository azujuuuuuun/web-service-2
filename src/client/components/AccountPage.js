// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

import GlobalHeader from '../containers/GlobalHeaderContainer';
import SettingsMenu from './SettingsMenu';
import TitleSection from './TitleSection';

type Props = {
  viewer: any,
};

const AccountPage = (props: Props) => {
  const { viewer } = props;
  return (
    <div className="account-page">
      <GlobalHeader />
      <Grid container justify="center" spacing={16}>
        <Grid item xs={3}>
          <SettingsMenu />
        </Grid>
        <Grid item xs={7}>
          <div className="account">
            <TitleSection
              avatarImgSrc={viewer.avatarImgSrc}
              username={viewer.username}
              title="アカウント"
            />
            <div className="icon">
              <div>アイコン</div>
              <img className="img" src={viewer.avatarImgSrc} alt="アバター" />
              <div className="upload-link">
                <Link to="/settings/account/custom_image">
                  画像アップロード
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountPage;
