// @flow

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

type Props = {
  avatarImgSrc: string,
  username: string,
  title: string,
};

const TitleSection = (props: Props) => {
  const { avatarImgSrc, username, title } = props;
  return (
    <div className="title-section">
      <div className="account">
        <div className="avatar">
          <Avatar src={avatarImgSrc}>
            {username}
          </Avatar>
        </div>
        <div className="username">
          <Link to={`/${username}`}>
            {username}アカウント
          </Link>
        </div>
      </div>
      <span className="separater">/</span>
      <div className="title">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default TitleSection;
