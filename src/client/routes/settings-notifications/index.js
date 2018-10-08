// @flow

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GlobalHeader from '../../components/organisms/GlobalHeader';
import SettingsMenu from '../../components/SettingsMenu';
import EmailSetting from './EmailSetting';
import NotificationsSetting from './NotificationsSetting';
import Loading from '../../components/Loading';
import type { Viewer } from '../../reducers/viewer';

type Props = {
  viewer: Viewer,
};

const SettingsNotificationsPage = (props: Props) => {
  const { viewer } = props;
  return (
    <Loading>
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
              <span>メールアドレスと通知</span>
            </div>
            <EmailSetting />
            <NotificationsSetting viewer={viewer} />
          </div>
        </div>
      </div>
    </Loading>
  );
};

const mapStateToProps = state => ({
  viewer: state.viewer,
});

export default connect(mapStateToProps)(SettingsNotificationsPage);
