// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';

import GlobalHeader from '../containers/GlobalHeaderContainer';
import SettingsMenu from './SettingsMenu';
import TitleSection from './TitleSection';

type Props = {
  viewer: any,
  handleChangeFile: any,
  handleClickUploadImage: any,
};

const ProfileImageUploadPage = (props: Props) => {
  const { viewer, handleChangeFile, handleClickUploadImage } = props;
  return (
    <div className="profile-image-upload-page">
      <GlobalHeader />
      <Grid container justify="center" spacing={16}>
        <Grid item xs={3}>
          <SettingsMenu />
        </Grid>
        <Grid item xs={7}>
          <div className="main">
            <TitleSection
              avatarImgSrc={viewer.avatarImgSrc}
              username={viewer.username}
              title="プロフィール画像アップロード"
            />
            <div className="body">
              <div className="upload">
                {viewer.avatarImgSrc ? (
                  <img className="img" src={viewer.avatarImgSrc} alt="アバター" />
                ) : (
                  <div className="img-icon">
                    <ImageIcon />
                  </div>
                )}
                <div className="file">
                  <input
                    className="input"
                    type="file"
                    name="avatar"
                    onChange={handleChangeFile}
                  />
                  <span className="file-size">10MBまで</span>
                </div>
              </div>
              <div className="btn-group">
                <div className="upload-btn">
                  <Button onClick={handleClickUploadImage}>
                    新しい画像をアップロードする
                  </Button>
                </div>
                <div className="cancel-btn">
                  <Link to="/settings/account">キャンセル</Link>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileImageUploadPage;
