// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Loading from '../../components/Loading';
import GlobalHeader from '../../components/GlobalHeader';
import SettingsMenu from '../../components/SettingsMenu';
import TitleSection from '../../components/TitleSection';
import type { Viewer } from '../../reducers/viewer';

type Props = {
  viewer: Viewer,
};

const Img = styled.img`
  display: block;
  width: 2.5rem;
`;

const StyledLink = styled(Link)`
  font-size: 0.9rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const AccountPage = (props: Props) => {
  const { viewer } = props;
  return (
    <Loading>
      <div>
        <GlobalHeader />
        <Grid container justify="center" spacing={16}>
          <Grid item xs={3}>
            <SettingsMenu />
          </Grid>
          <Grid item xs={7}>
            <div>
              {viewer.avatarImgSrc &&
                viewer.username && (
                  <TitleSection
                    avatarImgSrc={viewer.avatarImgSrc}
                    username={viewer.username}
                    title="アカウント"
                  />
                )}
              <div>
                <div>アイコン</div>
                <Img src={viewer.avatarImgSrc} alt="アバター" />
                <StyledLink to="/settings/account/custom_image">
                  画像アップロード
                </StyledLink>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Loading>
  );
};

const mapStateToProps = state => ({
  viewer: state.viewer,
});

export default connect(mapStateToProps)(AccountPage);
