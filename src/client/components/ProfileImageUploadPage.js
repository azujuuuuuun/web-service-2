// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import GlobalHeader from './GlobalHeader';
import SettingsMenu from './SettingsMenu';
import TitleSection from './TitleSection';
import Loading from './Loading';
import { uploadImageRequested } from '../actions';

type PProps = {
  viewer: any,
  handleChangeFile: any,
  handleClickUploadImage: any,
};

type CProps = {
  viewer: any,
  uploadImageRequest: any,
};

type State = {
  file: any,
};

const Img = styled.img`
  margin-right: 1rem;
  width: 3rem;
`;

const File = styled.div`
  display: inline-block;
`;

const Input = styled.input`
  display: block;
`;

const FileSize = styled.span`
  font-size: 0.75rem;
`;

const UploadButton = styled(Button)`
  display: inline-block;
`;

const CancelButton = styled.div`
  border-radius: 3px;
  display: inline-block;
  padding: 0.25rem 1rem;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    background-color: lightgray;
  }
`;

const ProfileImageUploadPage = (props: PProps) => {
  const { viewer, handleChangeFile, handleClickUploadImage } = props;
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
              title="プロフィール画像アップロード"
            />
            <div>
              <div>
                {viewer.avatarImgSrc ? (
                  <Img src={viewer.avatarImgSrc} alt="アバター" />
                ) : (
                  <ImageIcon />
                )}
                <File>
                  <Input
                    type="file"
                    name="avatar"
                    onChange={handleChangeFile}
                  />
                  <FileSize>10MBまで</FileSize>
                </File>
              </div>
              <div>
                <UploadButton onClick={handleClickUploadImage}>
                  新しい画像をアップロードする
                </UploadButton>
                <CancelButton>
                  <StyledLink to="/settings/account">キャンセル</StyledLink>
                </CancelButton>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

class ProfileImageUploadPageContainer extends React.Component<CProps, State> { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = { file: undefined };
  }

  handleChangeFile = e => {
    this.setState({ file: e.target.files[0] });
  };

  handleClickUploadImage = () => {
    const { uploadImageRequest } = this.props;
    const { file } = this.state;
    const formData = new FormData();
    formData.append('avatar', file);
    uploadImageRequest(formData);
  };

  render() {
    const { viewer } = this.props;
    return (
      <Loading>
        <ProfileImageUploadPage
          viewer={viewer}
          handleChangeFile={this.handleChangeFile}
          handleClickUploadImage={this.handleClickUploadImage}
        />
      </Loading>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.viewer,
});

const mapDispatchToProps = (dispatch: any) => ({
  uploadImageRequest: image => dispatch(uploadImageRequested({ image })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileImageUploadPageContainer);
